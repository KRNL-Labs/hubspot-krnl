const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('📁 Created uploads directory');
}

// Configure multer for file upload handling
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: function (req, file, cb) {
    // Allowed file types
    const allowedTypes = ['.pdf', '.doc', '.docx', '.txt', '.jpg', '.jpeg', '.png'];
    const ext = path.extname(file.originalname).toLowerCase();

    if (allowedTypes.includes(ext)) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Allowed types: ' + allowedTypes.join(', ')));
    }
  }
});

// Serve static files (including our upload page)
app.use(express.static(path.join(__dirname)));

// Route to serve the upload page
app.get('/upload', (req, res) => {
  console.log('📄 Serving upload page with query params:', req.query);
  res.sendFile(path.join(__dirname, 'upload-page.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('🏥 Health check requested');
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'AccessShield Upload Service'
  });
});

// File upload endpoint
app.post('/api/upload-document', upload.single('document'), (req, res) => {
  console.log('📤 Document upload request received');
  console.log('📤 File info:', req.file);
  console.log('📤 Body data:', req.body);

  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file uploaded'
      });
    }

    const { objectId, objectType, metadata } = req.body;

    // Generate a blockchain hash for demo purposes
    const hash = crypto.createHash('sha256')
      .update(req.file.buffer || req.file.originalname + Date.now())
      .digest('hex');

    // Create document record
    const document = {
      id: `doc_${Date.now()}`,
      fileName: req.file.originalname,
      storedFileName: req.file.filename,
      fileSize: req.file.size,
      mimeType: req.file.mimetype,
      uploadedAt: new Date().toISOString(),
      blockchainStatus: 'Registered',
      hash: `0x${hash.substring(0, 16)}...demo`,
      objectId: objectId,
      objectType: objectType,
      metadata: metadata ? JSON.parse(metadata) : {}
    };

    console.log('📤 Document record created:', document);

    // In a real implementation, you would:
    // 1. Save document record to database
    // 2. Register on blockchain
    // 3. Apply watermarking
    // 4. Store in secure storage

    // Simulate processing delay
    setTimeout(() => {
      res.json({
        success: true,
        message: 'Document uploaded and registered successfully',
        document: document
      });
    }, 500);

  } catch (error) {
    console.error('❌ Upload error:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Upload failed'
    });
  }
});

// Get documents for a specific object (multi-tenant)
app.get('/api/documents/:teamId/:portalId/:objectType/:objectId', (req, res) => {
  console.log('📄 Documents request:', req.params);

  const { teamId, portalId, objectType, objectId } = req.params;

  // In a real implementation, query database by these parameters
  // For demo, return mock data
  const documents = [
    {
      id: `doc_${Date.now() - 1000}`,
      fileName: 'contract-sample.pdf',
      fileSize: 245760,
      uploadedAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      blockchainStatus: 'Registered',
      hash: '0x1a2b3c4d5e6f7890...demo',
      objectId: objectId,
      objectType: objectType
    }
  ];

  res.json({
    success: true,
    documents: documents,
    total: documents.length
  });
});

// Get access logs
app.get('/api/documents/:teamId/:portalId/access-logs', (req, res) => {
  console.log('📜 Access logs request:', req.params, req.query);

  // Mock access logs
  const logs = [
    {
      id: 'log_' + Date.now(),
      documentId: req.query.document_id || 'doc_123',
      userId: 'user_456',
      action: 'VIEW',
      timestamp: new Date().toISOString(),
      ipAddress: req.ip,
      userAgent: req.headers['user-agent']
    }
  ];

  res.json({
    success: true,
    logs: logs,
    total: logs.length
  });
});

// Get compliance stats
app.get('/api/documents/:teamId/:portalId/compliance-stats', (req, res) => {
  console.log('📊 Compliance stats request:', req.params);

  // Mock compliance stats
  const stats = {
    totalDocuments: 15,
    blockchainRegistered: 12,
    watermarked: 10,
    accessLogged: 15,
    complianceScore: 85
  };

  res.json({
    success: true,
    stats: stats
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        error: 'File too large. Maximum size is 10MB.'
      });
    }
  }

  console.error('❌ Server error:', error);
  res.status(500).json({
    success: false,
    error: error.message || 'Internal server error'
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 AccessShield Upload Server running on port ${port}`);
  console.log(`📄 Upload page: http://localhost:${port}/upload`);
  console.log(`🏥 Health check: http://localhost:${port}/api/health`);
  console.log(`📁 Uploads directory: ${uploadsDir}`);
});

module.exports = app;