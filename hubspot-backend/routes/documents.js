const express = require('express');
const router = express.Router();
const multer = require('multer');
const documentService = require('../services/documentService');
const hubspotOAuth = require('../services/hubspotOAuth');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

// Middleware to validate team access
const validateTeamAccess = async (req, res, next) => {
  try {
    const { teamId, hubspotAccountId } = req.params;

    console.log('🔐 validateTeamAccess: Checking access for', { teamId, hubspotAccountId });

    if (!teamId || !hubspotAccountId) {
      return res.status(400).json({
        success: false,
        error: 'Missing team or account parameters'
      });
    }

    // For 'default' teamId, look up the actual team ID from the database
    try {
      let actualTeamId = teamId;

      if (teamId === 'default') {
        console.log('🔐 validateTeamAccess: Looking up team for portal', hubspotAccountId);
        const { query } = require('../database/connection');
        const teamResult = await query(
          'SELECT team_id FROM hubspot_accounts WHERE hubspot_account_id = $1 AND is_active = true',
          [parseInt(hubspotAccountId)]
        );

        if (teamResult.rows.length === 0) {
          console.error('🔐 validateTeamAccess: No active account found for portal', hubspotAccountId);
          return res.status(401).json({
            success: false,
            error: 'No active HubSpot account found'
          });
        }

        actualTeamId = teamResult.rows[0].team_id;
        console.log('🔐 validateTeamAccess: Found team ID', actualTeamId, 'for portal', hubspotAccountId);
      }

      // Now validate access with the actual team ID
      await hubspotOAuth.getValidAccessToken(actualTeamId, hubspotAccountId);
      req.teamId = parseInt(actualTeamId);
      req.hubspotAccountId = parseInt(hubspotAccountId);

      console.log('✅ validateTeamAccess: Access validated for team', actualTeamId, 'portal', hubspotAccountId);
      next();
    } catch (error) {
      console.error('❌ validateTeamAccess: Authentication error:', error.message);
      return res.status(401).json({
        success: false,
        error: 'Invalid or expired authentication'
      });
    }
  } catch (error) {
    console.error('❌ validateTeamAccess: Validation error:', error);
    res.status(500).json({
      success: false,
      error: 'Authentication validation failed'
    });
  }
};

// Upload document for a specific HubSpot object
router.post('/:teamId/:hubspotAccountId/upload/:objectType/:objectId',
  validateTeamAccess,
  upload.single('document'),
  async (req, res) => {
    try {
      const { objectType, objectId } = req.params;
      const { metadata } = req.body;

      if (!req.file) {
        return res.status(400).json({
          success: false,
          error: 'No file uploaded'
        });
      }

      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'image/jpeg',
        'image/png'
      ];

      if (!allowedTypes.includes(req.file.mimetype)) {
        return res.status(400).json({
          success: false,
          error: 'File type not supported'
        });
      }

      // Prepare document data
      const documentData = {
        hubspotObjectType: objectType,
        hubspotObjectId: parseInt(objectId),
        fileName: req.file.originalname,
        fileSize: req.file.size,
        mimeType: req.file.mimetype,
        fileData: req.file.buffer.toString('base64'),
        metadata: metadata ? JSON.parse(metadata) : {}
      };

      // Upload document
      const result = await documentService.uploadDocument(
        req.teamId,
        req.hubspotAccountId,
        documentData
      );

      res.json({
        success: true,
        document: result,
        message: 'Document uploaded and queued for blockchain registration'
      });

    } catch (error) {
      console.error('Document upload error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to upload document'
      });
    }
  }
);

// Get documents for a specific HubSpot object
router.get('/:teamId/:hubspotAccountId/:objectType/:objectId',
  validateTeamAccess,
  async (req, res) => {
    try {
      const { objectType, objectId } = req.params;

      const documents = await documentService.getDocumentsForObject(
        req.teamId,
        req.hubspotAccountId,
        objectType,
        parseInt(objectId)
      );

      res.json({
        success: true,
        documents,
        total: documents.length
      });

    } catch (error) {
      console.error('Get documents error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve documents'
      });
    }
  }
);

// Get all documents for a team
router.get('/:teamId/all', async (req, res) => {
  try {
    const { teamId } = req.params;
    const { limit = 50, offset = 0 } = req.query;

    const documents = await documentService.getTeamDocuments(
      parseInt(teamId),
      parseInt(limit),
      parseInt(offset)
    );

    res.json({
      success: true,
      documents,
      total: documents.length
    });

  } catch (error) {
    console.error('Get team documents error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve documents'
    });
  }
});

// Log document access
router.post('/:teamId/:hubspotAccountId/access/:documentId',
  validateTeamAccess,
  async (req, res) => {
    try {
      const { documentId } = req.params;
      const { user_id, access_type, metadata = {} } = req.body;

      // Add IP address to metadata
      metadata.ipAddress = req.ip;

      const result = await documentService.logDocumentAccess(
        parseInt(documentId),
        user_id,
        access_type,
        metadata
      );

      res.json({
        success: true,
        accessLog: result,
        message: 'Document access logged successfully'
      });

    } catch (error) {
      console.error('Document access logging error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to log document access'
      });
    }
  }
);

// Get access logs
router.get('/:teamId/:hubspotAccountId/access-logs',
  validateTeamAccess,
  async (req, res) => {
    try {
      const { document_id, limit = 100, offset = 0, record_id } = req.query;
      const { teamId, hubspotAccountId } = req.params;

      console.log('📜 Access logs endpoint called with:', {
        route: 'GET /:teamId/:hubspotAccountId/access-logs',
        params: { teamId, hubspotAccountId },
        query: { document_id, limit, offset, record_id },
        allQuery: req.query
      });

      if (!record_id) {
        console.warn('⚠️ No record_id provided in query params');
        return res.status(400).json({
          success: false,
          error: 'record_id parameter is required'
        });
      }

      console.log('📜 Calling documentService.getAccessLogs with:', {
        record_id,
        document_id: document_id ? parseInt(document_id) : null,
        limit: parseInt(limit),
        offset: parseInt(offset)
      });

      const logs = await documentService.getAccessLogs(
        record_id,
        document_id ? parseInt(document_id) : null,
        parseInt(limit),
        parseInt(offset)
      );

      console.log('📜 Access logs service returned:', {
        logsCount: logs.length,
        firstLog: logs.length > 0 ? {
          id: logs[0].id,
          fileName: logs[0].fileName,
          userName: logs[0].userName,
          accessType: logs[0].accessType
        } : null
      });

      res.json({
        success: true,
        logs,
        total: logs.length
      });

    } catch (error) {
      console.error('❌ Get access logs error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve access logs'
      });
    }
  }
);

// Get compliance statistics
router.get('/:teamId/:hubspotAccountId/compliance-stats',
  validateTeamAccess,
  async (req, res) => {
    try {
      const { hubspotAccountId } = req.params;
      const stats = await documentService.getComplianceStats(hubspotAccountId);

      res.json({
        success: true,
        ...stats
      });

    } catch (error) {
      console.error('Compliance stats error:', error);
      res.status(500).json({
        success: false,
        error: 'Failed to retrieve compliance statistics'
      });
    }
  }
);

// Legacy endpoints for backward compatibility (will be deprecated)
router.get('/documents/:objectType/:objectId', async (req, res) => {
  // Return mock data for development
  const { objectType, objectId } = req.params;

  const mockDocuments = [
    {
      id: `doc_${objectType}_${objectId}_001`,
      fileName: 'Contract_Agreement.pdf',
      blockchainStatus: 'Registered',
      registrationTimestamp: new Date(Date.now() - 86400000).toISOString(),
      hash: '0x1a2b3c4d5e6f7890abcdef1234567890',
      fileSize: 245760,
      mimeType: 'application/pdf'
    }
  ];

  res.json({
    success: true,
    documents: mockDocuments,
    total: mockDocuments.length,
    message: 'Legacy endpoint - please migrate to OAuth-based endpoints'
  });
});

router.get('/access-logs/:documentId', async (req, res) => {
  // Return mock data for development
  const mockLogs = [
    {
      id: 'log_001',
      fileName: 'Contract_Agreement.pdf',
      userName: 'John Doe',
      accessType: 'view',
      accessTimestamp: new Date(Date.now() - 3600000).toISOString(),
      sessionId: 'session_abc123',
      blockchainStatus: 'Registered'
    }
  ];

  res.json({
    success: true,
    logs: mockLogs,
    total: mockLogs.length,
    message: 'Legacy endpoint - please migrate to OAuth-based endpoints'
  });
});

module.exports = router;