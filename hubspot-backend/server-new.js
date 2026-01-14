const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Trust proxy for ngrok and other reverse proxies
app.set('trust proxy', 1);

// Security middleware
app.use(helmet({
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});

app.use('/api/', limiter);

// CORS configuration for HubSpot integration
app.use(cors({
  origin: [
    'https://app.hubspot.com',
    'https://app-na1.hubspot.com',
    'https://app-na2.hubspot.com',
    'https://app-na3.hubspot.com',
    'https://app-eu1.hubspot.com',
    'https://app-ap1.hubspot.com',
    'http://localhost:3000',
    'http://localhost:8000',
    'http://localhost:8001',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'ngrok-skip-browser-warning']
}));

// Body parsing middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Raw file upload middleware for development
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Session configuration for OAuth state management
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Import routes
const authRoutes = require('./routes/auth');
const documentRoutes = require('./routes/documents');

// Import KRNL services
const { initSmartAccountFromEnv } = require('./src/services/eip4337AccountService');

// Initialize global Supabase client for access logging
const { createClient } = require('@supabase/supabase-js');
const supabase = process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY
  ? createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
  : null;

// Upload page route
app.get('/upload', (req, res) => {
  console.log('📄 Serving upload page with query params:', req.query);
  res.sendFile(path.join(__dirname, '../public/upload.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'AccessShield Multi-Tenant API',
    version: '2.0.0'
  });
});


// OAuth routes
app.use('/api/auth', authRoutes);

// Development upload endpoint (bypasses OAuth for testing) - MUST BE BEFORE document routes
app.post('/api/documents/:teamId/:hubspotAccountId/upload/:objectType/:objectId',
  upload.single('document'),
  async (req, res) => {
    try {
      const { teamId, hubspotAccountId, objectType, objectId } = req.params;
      const { metadata, recordId: bodyRecordId } = req.body;

      // Use recordId from body if provided, otherwise use objectId directly
      const recordId = bodyRecordId || objectId;

      console.log('📤 Development upload received:', {
        teamId,
        hubspotAccountId,
        objectType,
        objectId,
        recordId,
        fileName: req.file?.originalname,
        fileSize: req.file?.size,
        mimeType: req.file?.mimetype
      });

      if (!req.file) {
        return res.status(400).json({
          success: false,
          error: 'No file uploaded'
        });
      }

      // Validate PDF only for secure upload
      if (req.file.mimetype !== 'application/pdf') {
        return res.status(400).json({
          success: false,
          error: 'Only PDF files are supported for secure document upload'
        });
      }

      // Validate PDF header
      const headerAscii = req.file.buffer.slice(0, 8).toString('utf8');
      if (!headerAscii.startsWith('%PDF-')) {
        return res.status(400).json({
          success: false,
          error: 'Uploaded content is not a valid PDF (missing %PDF- header)',
          details: {
            headerAscii,
            hint: 'Ensure you upload a valid PDF file'
          }
        });
      }

      // Step 1: Store file in Supabase and compute hash
      const { storeFileAndHash, storeFileRecord } = require('./services/fileStorageService');

      const { hash: documentHash, storage } = await storeFileAndHash({
        buffer: req.file.buffer,
        recordId,
        fileName: req.file.originalname,
        contentType: req.file.mimetype
      });

      console.log('📁 File stored with hash:', documentHash);

      // Step 2: Blockchain registration (if configured)
      let blockchainStatus = 'Hash Generated';
      let txHash = null;
      let blockNumber = null;

      if (process.env.RPC_SEPOLIA_URL && process.env.DOCUMENT_REGISTRY_CONTRACT && process.env.EOA_PRIVATE_KEY) {
        try {
          console.log('🔗 Registering document on blockchain...');

          // Import the registration service
          const { ethers } = require('ethers');

          const DOCUMENT_REGISTRY_ABI = [
            'function registerDocumentDirect(string documentHash, string recordId, string metadata) external',
            'event DocumentRegistered(string indexed documentHash, string recordId, address registeredBy, uint256 timestamp)'
          ];

          const rpcUrl = process.env.RPC_SEPOLIA_URL;
          const contractAddress = process.env.DOCUMENT_REGISTRY_CONTRACT;
          const eoaPrivateKey = process.env.EOA_PRIVATE_KEY;

          // Initialize provider and wallet
          const provider = ethers.providers?.JsonRpcProvider
            ? new ethers.providers.JsonRpcProvider(rpcUrl)
            : new ethers.JsonRpcProvider(rpcUrl);

          const wallet = new ethers.Wallet(eoaPrivateKey, provider);
          const contract = new ethers.Contract(contractAddress, DOCUMENT_REGISTRY_ABI, wallet);

          // Prepare metadata
          const blockchainMetadata = JSON.stringify({
            fileName: req.file.originalname,
            fileSize: req.file.size,
            mimeType: req.file.mimetype,
            uploadedAt: new Date().toISOString(),
            hubspotObjectType: objectType,
            hubspotObjectId: parseInt(objectId),
            hubspotAccountId
          });

          // Send transaction
          const tx = await contract.registerDocumentDirect(documentHash, recordId, blockchainMetadata);
          console.log('📤 Blockchain transaction sent:', tx.hash);

          // Wait for confirmation
          const receipt = tx.wait ? await tx.wait() : await provider.waitForTransaction(tx.hash);

          txHash = receipt.transactionHash;
          blockNumber = receipt.blockNumber;
          blockchainStatus = 'Registered on Blockchain';

          console.log('✅ Blockchain registration confirmed:', {
            txHash,
            blockNumber,
            documentHash
          });

        } catch (blockchainError) {
          console.error('❌ Blockchain registration failed:', blockchainError);
          return res.status(500).json({
            success: false,
            error: 'Blockchain registration failed: ' + blockchainError.message,
            details: {
              documentHash,
              blockchainError: blockchainError.message
            }
          });
        }
      } else {
        console.log('⚠️ Blockchain registration skipped - missing environment variables');
        blockchainStatus = 'Configuration Missing';
      }

      // Step 3: Store file metadata in database for dashboard
      await storeFileRecord({
        fileName: req.file.originalname,
        documentHash,
        storageBucket: storage?.bucket || 'local',
        storagePath: storage?.path || `${recordId}/${req.file.originalname}`,
        recordId,
        hubspotAccountId,
        objectType,
        fileSize: req.file.size,
        contentType: req.file.mimetype,
        txHash,
        blockNumber,
        blockchainStatus
      });
      console.log('✅ File metadata stored in database');

      // Final response
      const document = {
        id: `doc_${Date.now()}`,
        fileName: req.file.originalname,
        fileSize: req.file.size,
        mimeType: req.file.mimetype,
        uploadedAt: new Date().toISOString(),
        documentHash,
        blockchainStatus,
        txHash,
        blockNumber,
        hubspotObjectType: objectType,
        hubspotObjectId: parseInt(objectId),
        recordId
      };

      console.log('✅ Upload and registration complete:', {
        documentHash,
        blockchainStatus,
        txHash,
        blockNumber
      });

      res.json({
        success: true,
        document,
        message: `Document uploaded and ${blockchainStatus.toLowerCase()}`
      });

    } catch (error) {
      console.error('❌ Upload error:', error);
      res.status(500).json({
        success: false,
        error: 'Upload failed: ' + error.message
      });
    }
  }
);

// Document management routes (multi-tenant)
app.use('/api/documents', documentRoutes);

// Access logging routes (KRNL workflow integration)
const accessRoutes = require('./src/controllers/accessController');
app.use('/api/access', accessRoutes);

// Document viewer endpoint with JWT token authentication
const jwt = require('jsonwebtoken');
const { logger } = require('./src/utils/logger');

/**
 * Log document access to Supabase access_logs table
 */
async function logDocumentAccess({
  sessionId,
  documentHash,
  filePath,
  accessHash,
  watermarkApplied,
  watermarkData,
  decoded, // Add decoded JWT token
  req
}) {
  try {
    console.log('📝 Logging document access to Supabase access_logs table');

    if (!supabase) {
      console.log('⚠️ Supabase client not available, skipping access log');
      return;
    }

    // Extract document ID from the document_records table based on hash and file path
    let documentId = null;
    try {
      // First try the document_records table (used by this app)
      const { data: documents, error: docError } = await supabase
        .from('document_records')
        .select('id, document_hash, storage_path, file_name')
        .eq('document_hash', documentHash)
        .limit(1);

      if (docError) {
        console.log('⚠️ Could not find document in document_records:', docError.message);
      } else if (documents && documents.length > 0) {
        documentId = documents[0].id;
        console.log('✅ Found document ID from document_records:', documentId);
      } else {
        console.log('⚠️ No document found in document_records with hash:', documentHash.substring(0, 10) + '...');

        // Fallback: try the documents table
        const { data: fallbackDocs, error: fallbackError } = await supabase
          .from('documents')
          .select('id, document_hash')
          .eq('document_hash', documentHash)
          .limit(1);

        if (!fallbackError && fallbackDocs && fallbackDocs.length > 0) {
          documentId = fallbackDocs[0].id;
          console.log('✅ Found document ID from documents fallback:', documentId);
        }
      }
    } catch (docQueryError) {
      console.log('⚠️ Error querying document:', docQueryError.message);
    }

    // Extract user information from JWT token
    let userId = null;
    const userEmail = decoded?.userId;
    if (userEmail) {
      try {
        // Try to find or create user record
        const { data: existingUsers, error: userQueryError } = await supabase
          .from('users')
          .select('id')
          .eq('email', userEmail)
          .limit(1);

        if (!userQueryError && existingUsers && existingUsers.length > 0) {
          userId = existingUsers[0].id;
          console.log('✅ Found existing user ID:', userId);
        } else {
          // Create new user record if not exists
          const { data: newUser, error: createUserError } = await supabase
            .from('users')
            .insert([{
              email: userEmail,
              created_at: new Date().toISOString()
            }])
            .select()
            .single();

          if (!createUserError && newUser) {
            userId = newUser.id;
            console.log('✅ Created new user ID:', userId);
          } else {
            console.log('⚠️ Could not create user:', createUserError?.message);
          }
        }
      } catch (userError) {
        console.log('⚠️ Error handling user:', userError.message);
      }
    }

    // Extract record_id from JWT token
    const recordId = decoded?.recordId || null;

    // Insert access log
    const accessLogData = {
      document_id: documentId,
      user_id: userId,
      record_id: recordId, // HubSpot record ID from JWT token
      access_type: 'view',
      ip_address: req.ip || req.connection?.remoteAddress || null,
      user_agent: req.get('User-Agent') || null,
      session_id: sessionId,
      watermark_applied: watermarkApplied,
      watermark_data: watermarkData,
      access_hash: accessHash, // Add the KRNL access hash
      expires_at: null, // Could set based on session expiry if needed
      created_at: new Date().toISOString()
    };

    console.log('📝 Inserting access log:', {
      ...accessLogData,
      watermark_data: watermarkData ? 'present' : null,
      user_agent: accessLogData.user_agent?.substring(0, 50) + '...' || null
    });

    const { data, error } = await supabase
      .from('access_logs')
      .insert([accessLogData])
      .select();

    if (error) {
      console.error('❌ Failed to insert access log:', error.message);
    } else {
      console.log('✅ Access log inserted successfully:', {
        id: data?.[0]?.id,
        sessionId,
        documentId,
        watermarkApplied
      });
    }

  } catch (error) {
    console.error('❌ Error logging document access:', error.message);
    // Don't throw error to avoid breaking the document serving
  }
}

app.get('/api/view', async (req, res) => {
  console.log('🔍 /api/view endpoint called');
  console.log('📋 Query params:', req.query);
  console.log('📋 Headers:', req.headers);

  try {
    const { token } = req.query;

    if (!token) {
      console.log('❌ No token provided');
      return res.status(400).json({
        success: false,
        error: 'Access token is required'
      });
    }

    console.log('🔑 Token received:', token.substring(0, 20) + '...');

    // Verify and decode JWT token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-super-secret-jwt-key-for-development');
      console.log('✅ Token decoded successfully:', {
        documentHash: decoded.documentHash,
        sessionId: decoded.sessionId,
        documentId: decoded.documentId,
        documentPath: decoded.documentPath,
        recordId: decoded.recordId,
        accessHash: decoded.accessHash ? decoded.accessHash.substring(0, 10) + '...' : 'none'
      });
    } catch (err) {
      console.log('❌ Token verification failed:', err.message);
      return res.status(401).json({
        success: false,
        error: 'Invalid or expired access token'
      });
    }

    const {
      documentHash,
      sessionId,
      documentId: tokenDocumentId,
      documentPath: tokenDocumentPath,
      recordId: tokenRecordId,
      accessHash: tokenAccessHash
    } = decoded;

    if (!documentHash || !sessionId) {
      return res.status(400).json({
        success: false,
        error: 'Invalid token payload'
      });
    }

    // Start by trusting the file path and accessHash embedded in the token.
    let filePath = tokenDocumentPath || tokenDocumentId || tokenRecordId || null;
    let accessHash = tokenAccessHash || null;

    console.log('🗂️ Initial file resolution:', {
      filePath,
      accessHash: accessHash ? accessHash.substring(0, 10) + '...' : 'none',
      tokenDocumentPath,
      tokenDocumentId,
      tokenRecordId
    });

    // For older tokens (or if claims are missing), fall back to KRNL
    // session status (persisted in Supabase) to resolve filePath/accessHash.
    if (!filePath || !accessHash) {
      const KRNLService = require('./src/services/krnlService');
      const krnlService = new KRNLService();

      try {
        const statusResult = await krnlService.getWorkflowStatus(sessionId);

        const sessionFilePath =
          (statusResult && statusResult.documentId) || tokenDocumentPath || tokenDocumentId || tokenRecordId || null;
        const sessionAccessHash = (statusResult && statusResult.accessHash) || null;

        if (!sessionFilePath || !sessionAccessHash) {
          return res.status(404).json({
            success: false,
            error: 'Session not found or missing file path/accessHash'
          });
        }

        filePath = filePath || sessionFilePath;
        accessHash = accessHash || sessionAccessHash;
      } catch (err) {
        logger.warn('Failed to retrieve session for viewer', { sessionId, error: err.message });

        // If we still don't have enough information to serve the file, treat
        // this as an expired session. Otherwise, fall through and use the
        // token-derived values we already have.
        if (!filePath || !accessHash) {
          return res.status(404).json({
            success: false,
            error: 'Session not found or expired'
          });
        }
      }
    }

    // At this point we must have a filePath and accessHash to proceed.
    if (!filePath || !accessHash) {
      console.log('❌ Missing filePath or accessHash:', { filePath, accessHash });
      return res.status(404).json({
        success: false,
        error: 'Session not found or missing file path/accessHash'
      });
    }

    console.log('📄 About to access document:', {
      documentHash,
      sessionId,
      filePath,
      accessHash: accessHash.substring(0, 10) + '...'
    });

    // Retrieve file from Supabase
    console.log('📂 Attempting to retrieve file from Supabase:', filePath);
    const { getSupabaseFileBuffer } = require('./services/fileStorageService');

    let buffer, contentType, fileName;
    try {
      const fileData = await getSupabaseFileBuffer(filePath);
      buffer = fileData.buffer;
      contentType = fileData.contentType;
      fileName = fileData.fileName;

      console.log('✅ File retrieved from Supabase:', {
        fileName,
        contentType,
        bufferSize: buffer?.length || 0
      });
    } catch (fileError) {
      console.log('❌ Failed to retrieve file from Supabase:', fileError.message);
      return res.status(404).json({
        success: false,
        error: 'Document not found in storage',
        details: fileError.message
      });
    }

    // If PDF, try to watermark it with the accessHash
    if (contentType === 'application/pdf' || fileName?.endsWith('.pdf')) {
      try {
        const { PDFDocument, rgb, degrees, StandardFonts } = require('pdf-lib');

        const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
        const pages = pdfDoc.getPages();
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Watermark text: full hash only
        const watermarkText = accessHash;
        const forensicText = `KRNL:${accessHash}:${documentHash || ''}:${sessionId || ''}`;

        for (const page of pages) {
          const { width, height } = page.getSize();

          // Calculate diagonal and font size to span corner to corner
          const diagonal = Math.sqrt(width * width + height * height);
          const margin = 100;
          const targetLength = Math.max(0, diagonal - 2 * margin);

          // Calculate font size based on text length
          const baseWidth = font.widthOfTextAtSize(watermarkText, 1);
          let fontSize = baseWidth > 0 ? targetLength / baseWidth : 20;
          fontSize = Math.max(14, Math.min(28, fontSize * 0.95));

          // Measure actual text dimensions
          const textWidth = font.widthOfTextAtSize(watermarkText, fontSize);
          const textHeight = font.heightAtSize(fontSize);

          // For 45-degree rotation, calculate position so text center aligns with page center
          const angleRad = Math.PI / 4; // 45 degrees
          const cos45 = Math.cos(angleRad);
          const sin45 = Math.sin(angleRad);

          // Calculate the center of the page
          const pageCenterX = width / 2;
          const pageCenterY = height / 2;

          // Calculate text center point (before rotation)
          const textCenterX = textWidth / 2;
          const textCenterY = textHeight / 2;

          // Apply rotation transformation to text center
          // Then calculate starting position so rotated text center aligns with page center
          const rotatedCenterX = textCenterX * cos45 - textCenterY * sin45;
          const rotatedCenterY = textCenterX * sin45 + textCenterY * cos45;

          const x = pageCenterX - rotatedCenterX;
          const y = pageCenterY - rotatedCenterY;

          page.drawText(watermarkText, {
            x,
            y,
            size: fontSize,
            font,
            color: rgb(0.5, 0.5, 0.5),
            opacity: 0.3,
            rotate: degrees(45)
          });

          page.drawText(forensicText, {
            x: 16,
            y: 16,
            size: 6,
            font,
            color: rgb(1, 1, 1),
            opacity: 0.02,
            rotate: degrees(0)
          });
        }

        const watermarkedPdfBytes = await pdfDoc.save();
        console.log('✅ PDF watermarked successfully');

        // Log the successful access to Supabase
        await logDocumentAccess({
          sessionId,
          documentHash,
          filePath,
          accessHash,
          watermarkApplied: true,
          watermarkData: {
            watermarkText: accessHash,
            forensicText: `KRNL:${accessHash}:${documentHash || ''}:${sessionId || ''}`,
            appliedAt: new Date().toISOString()
          },
          decoded,
          req
        });

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename="${fileName || 'document.pdf'}"`);
        return res.send(Buffer.from(watermarkedPdfBytes));
      } catch (err) {
        console.log('❌ Failed to watermark PDF:', err.message);
        return res.status(422).json({
          success: false,
          error: 'Unable to watermark PDF document',
          details: err.message || 'The PDF may be encrypted or unsupported. Upload an unencrypted copy to view it.'
        });
      }
    }

    // For non-PDF files, stream as-is
    console.log('✅ Streaming non-PDF file');

    // Log the successful access to Supabase (non-PDF file)
    await logDocumentAccess({
      sessionId,
      documentHash,
      filePath,
      accessHash,
      watermarkApplied: false,
      watermarkData: null,
      decoded,
      req
    });

    res.setHeader('Content-Type', contentType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `inline; filename="${fileName || 'document'}"`);
    res.send(buffer);

  } catch (error) {
    console.log('❌ Document viewer error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to process viewer request',
      details: error.message
    });
  }
});

// Legacy endpoints for backward compatibility during development
app.use('/api', documentRoutes);

// API documentation endpoint
app.get('/api/docs', (req, res) => {
  res.json({
    service: 'AccessShield Multi-Tenant API',
    version: '2.0.0',
    description: 'Multi-tenant document management API for HubSpot marketplace apps',
    endpoints: {
      auth: {
        'GET /api/auth/hubspot/authorize': 'Initiate OAuth flow',
        'GET /api/auth/hubspot/callback': 'Handle OAuth callback',
        'POST /api/auth/hubspot/refresh': 'Refresh access token',
        'POST /api/auth/hubspot/revoke': 'Revoke access token',
        'GET /api/auth/hubspot/status/:teamId/:hubspotAccountId': 'Check OAuth status'
      },
      documents: {
        'POST /api/documents/:teamId/:hubspotAccountId/upload/:objectType/:objectId': 'Upload document',
        'GET /api/documents/:teamId/:hubspotAccountId/:objectType/:objectId': 'Get documents for object',
        'GET /api/documents/:teamId/all': 'Get all team documents',
        'POST /api/documents/:teamId/:hubspotAccountId/access/:documentId': 'Log document access',
        'GET /api/documents/:teamId/:hubspotAccountId/access-logs': 'Get access logs',
        'GET /api/documents/:teamId/:hubspotAccountId/compliance-stats': 'Get compliance statistics'
      },
      legacy: {
        'GET /api/documents/:objectType/:objectId': 'Legacy document endpoint (deprecated)',
        'GET /api/access-logs/:documentId': 'Legacy access logs endpoint (deprecated)'
      }
    },
    authentication: {
      type: 'OAuth 2.0',
      provider: 'HubSpot',
      scopes: [
        'crm.objects.contacts.read',
        'crm.objects.contacts.write',
        'crm.objects.companies.read',
        'crm.objects.companies.write',
        'crm.objects.deals.read',
        'crm.objects.deals.write',
        'files'
      ]
    }
  });
});

// Webhook endpoint for HubSpot events
app.post('/api/webhooks/hubspot', (req, res) => {
  console.log('HubSpot webhook received:', req.body);

  // In a full implementation, you would:
  // 1. Verify the webhook signature
  // 2. Process the event (contact created, deal updated, etc.)
  // 3. Trigger relevant AccessShield actions

  res.status(200).json({
    success: true,
    message: 'Webhook received and processed'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('API Error:', error);

  // Don't leak error details in production
  const isDevelopment = process.env.NODE_ENV !== 'production';

  res.status(error.status || 500).json({
    success: false,
    error: isDevelopment ? error.message : 'Internal server error',
    stack: isDevelopment ? error.stack : undefined
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'API endpoint not found',
    message: 'Please check the API documentation at /api/docs'
  });
});

// Start server with KRNL initialization
async function startServer() {
  try {
    // Initialize EIP-4337 smart account for KRNL workflows
    if (process.env.ENABLE_EIP4337_INIT === 'true') {
      console.log('🔑 Initializing EIP-4337 smart account for KRNL workflows...');
      await initSmartAccountFromEnv();
    }

    app.listen(PORT, () => {
      console.log(`🚀 AccessShield Multi-Tenant API running on port ${PORT}`);
      console.log(`🔐 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`📋 API Documentation: http://localhost:${PORT}/api/docs`);
      console.log(`🔗 KRNL Access API: http://localhost:${PORT}/api/access/init`);

      // Test database connection on startup
      const { pool } = require('./database/connection');
      pool.query('SELECT NOW()', (err, result) => {
        if (err) {
          console.error('❌ Database connection failed:', err.message);
        } else {
          console.log('✅ Database connected successfully at:', result.rows[0].now);
        }
      });
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

module.exports = app;