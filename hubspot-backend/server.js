const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const crypto = require('crypto-js');
const axios = require('axios');
const { Client } = require('@hubspot/api-client');
const session = require('express-session');
const { authenticateHubSpotRequest } = require('./middleware/hubspotAuth');
const accessRouter = require('./src/controllers/accessController');
const complianceRouter = require('./src/controllers/complianceController');
const jwt = require('jsonwebtoken');
const { logger } = require('./src/utils/logger');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Trust proxy for ngrok and other reverse proxies
app.set('trust proxy', 1);

// Session configuration for OAuth state management
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in production with HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Middleware
app.use(cors({
  origin: [
    'https://app.hubspot.com',
    'https://app-eu1.hubspot.com',
    'https://051892e58926.ngrok-free.app',
    'http://localhost:3000'
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } });

// Multi-tenant HubSpot client factory
const createHubSpotClient = (accessToken) => {
  return new Client({ accessToken });
};

// Document upload endpoint
app.post('/api/upload-document', authenticateHubSpotRequest, upload.single('document'), async (req, res) => {
  try {
    const { objectId, objectType, metadata } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Generate file hash for blockchain
    const fileHash = crypto.SHA256(file.buffer.toString('base64')).toString();

    // Simulate blockchain registration
    const blockchainRecord = {
      hash: fileHash,
      timestamp: new Date().toISOString(),
      filename: file.originalname,
      size: file.size
    };

    // Store document metadata in HubSpot
    const documentData = {
      document_name: file.originalname,
      document_hash: fileHash,
      document_size: file.size.toString(),
      blockchain_verified: 'true',
      upload_timestamp: new Date().toISOString(),
      document_status: 'verified'
    };

    // Update HubSpot record
    await hubspotClient.crm.objects[objectType].update(objectId, {
      properties: documentData
    });

    res.json({
      success: true,
      document: {
        id: fileHash,
        name: file.originalname,
        hash: fileHash,
        status: 'verified',
        blockchain: blockchainRecord,
        uploadTime: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload document' });
  }
});

// Get documents for a record - Multi-tenant ready with development fallback
app.get('/api/documents/:objectType/:objectId', authenticateHubSpotRequest, async (req, res) => {
  try {
    const { objectType, objectId } = req.params;

    // For development: Return demo data to show the app working
    // In production: This would query your multi-tenant database
    const mockDocuments = [
      {
        id: `doc_${objectType}_${objectId}_001`,
        fileName: 'Contract_Agreement.pdf',
        blockchainStatus: 'Registered',
        registrationTimestamp: new Date(Date.now() - 86400000).toISOString(),
        hash: '0x1a2b3c4d5e6f7890abcdef1234567890',
        fileSize: 245760,
        mimeType: 'application/pdf'
      },
      {
        id: `doc_${objectType}_${objectId}_002`,
        fileName: 'Signed_NDA.docx',
        blockchainStatus: 'Processing',
        registrationTimestamp: new Date(Date.now() - 3600000).toISOString(),
        hash: null,
        fileSize: 102400,
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      }
    ];

    res.json({
      success: true,
      documents: mockDocuments,
      total: mockDocuments.length
    });

  } catch (error) {
    console.error('Get documents error:', error);
    res.status(500).json({ error: 'Failed to retrieve documents' });
  }
});

// Get access logs for a document
app.get('/api/access-logs/:documentId', authenticateHubSpotRequest, async (req, res) => {
  try {
    const { documentId } = req.params;

    // Mock access logs - in real implementation, fetch from database
    const accessLogs = [
      {
        id: 'log_001',
        fileName: 'Contract_Agreement.pdf',
        userName: 'John Doe',
        accessType: 'view',
        accessTimestamp: new Date(Date.now() - 3600000).toISOString(),
        sessionId: 'session_abc123',
        blockchainStatus: 'Registered'
      },
      {
        id: 'log_002',
        fileName: 'Signed_NDA.docx',
        userName: 'Jane Smith',
        accessType: 'download',
        accessTimestamp: new Date(Date.now() - 7200000).toISOString(),
        sessionId: 'session_def456',
        blockchainStatus: 'Processing'
      }
    ];

    res.json({
      success: true,
      logs: accessLogs,
      total: accessLogs.length
    });

  } catch (error) {
    console.error('Access logs error:', error);
    res.status(500).json({ error: 'Failed to retrieve access logs' });
  }
});

// Log document access
app.post('/api/log-access', authenticateHubSpotRequest, async (req, res) => {
  try {
    const { documentId, userId, action, metadata } = req.body;

    const accessLog = {
      id: Math.random().toString(36).substr(2, 9),
      documentId,
      userId,
      action,
      accessTime: new Date().toISOString(),
      metadata
    };

    // In real implementation, store in database
    console.log('Access logged:', accessLog);

    res.json({
      success: true,
      logId: accessLog.id
    });

  } catch (error) {
    console.error('Log access error:', error);
    res.status(500).json({ error: 'Failed to log access' });
  }
});

// Get compliance statistics
app.get('/api/compliance-stats/:objectType/:objectId', authenticateHubSpotRequest, async (req, res) => {
  try {
    const { objectType, objectId } = req.params;

    // Mock compliance stats
    const stats = {
      totalDocuments: 1,
      watermarkedDocuments: 1,
      blockchainVerified: 1,
      recentAccessEvents: 1,
      complianceScore: 95,
      lastAudit: new Date().toISOString()
    };

    res.json({
      success: true,
      stats
    });

  } catch (error) {
    console.error('Compliance stats error:', error);
    res.status(500).json({ error: 'Failed to get compliance stats' });
  }
});

// OAuth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'AccessShield API'
  });
});

// KRNL API routers
app.use('/api/access', accessRouter);
app.use('/api/compliance', complianceRouter);

// Document viewer endpoint with JWT token authentication
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

    logger.info('Document viewer accessed', {
      documentHash,
      sessionId,
      filePath,
      accessHash: accessHash.substring(0, 10) + '...'
    });

    // Retrieve file from Supabase
    console.log('📂 Attempting to retrieve file from Supabase:', filePath);
    const { getSupabaseFileBuffer } = require('./src/services/fileStorageService_s3');

    try {
      const { buffer, contentType, fileName } = await getSupabaseFileBuffer(filePath);
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

    const { buffer, contentType, fileName } = await getSupabaseFileBuffer(filePath);

    // If PDF, try to watermark it with the accessHash. If anything fails
    // (including encrypted PDFs), fall back to streaming the original file.
    if (contentType === 'application/pdf' || fileName?.endsWith('.pdf')) {
      try {
        const { PDFDocument, rgb, degrees, StandardFonts } = require('pdf-lib');

        // Use ignoreEncryption so encrypted PDFs can still be loaded. If
        // this or any later step fails, we will just stream the original.
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
          // When rotated, we need to account for both x and y offsets
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

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename="${fileName || 'document.pdf'}"`);
        return res.send(Buffer.from(watermarkedPdfBytes));
      } catch (err) {
        // Watermarking is mandatory. If we cannot safely watermark the PDF
        // (for example, because it is encrypted or malformed), do NOT stream
        // the original document. Instead, return a clear error so the caller
        // knows this document cannot be viewed.
        logger.warn('Failed to watermark PDF; blocking viewer', { error: err.message });
        return res.status(422).json({
          success: false,
          error: 'Unable to watermark PDF document',
          details: err.message || 'The PDF may be encrypted or unsupported. Upload an unencrypted copy to view it.'
        });
      }
    }

    // For non-PDF files, stream as-is
    res.setHeader('Content-Type', contentType || 'application/octet-stream');
    res.setHeader('Content-Disposition', `inline; filename="${fileName || 'document'}"`);
    res.send(buffer);

  } catch (error) {
    logger.error('Document viewer error', { error: error.message, stack: error.stack });
    res.status(500).json({
      success: false,
      error: 'Failed to process viewer request',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`AccessShield API running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`API Documentation: http://localhost:${PORT}/api/docs`);
});