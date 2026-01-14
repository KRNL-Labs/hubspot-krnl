const { query, transaction } = require('../database/connection');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto-js');

class DocumentService {
  // Upload and register a document for a team
  async uploadDocument(teamId, hubspotAccountId, documentData) {
    return await transaction(async (client) => {
      try {
        const {
          hubspotObjectType,
          hubspotObjectId,
          fileName,
          fileSize,
          mimeType,
          fileData, // Base64 encoded file data
          metadata = {}
        } = documentData;

        // Generate file hash for blockchain registration
        const fileHash = crypto.SHA256(fileData).toString();

        // Store document in database
        const documentResult = await client.query(
          `INSERT INTO documents
           (team_id, hubspot_account_id, hubspot_object_type, hubspot_object_id,
            file_name, file_hash, file_size, mime_type, metadata, blockchain_status)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
           RETURNING id`,
          [
            teamId,
            hubspotAccountId,
            hubspotObjectType,
            hubspotObjectId,
            fileName,
            fileHash,
            fileSize,
            mimeType,
            metadata,
            'pending'
          ]
        );

        const documentId = documentResult.rows[0].id;

        // Create compliance event
        await client.query(
          `INSERT INTO compliance_events
           (team_id, document_id, event_type, event_data)
           VALUES ($1, $2, $3, $4)`,
          [
            teamId,
            documentId,
            'document_upload',
            {
              fileName,
              fileSize,
              mimeType,
              hubspotObject: { type: hubspotObjectType, id: hubspotObjectId }
            }
          ]
        );

        // Simulate blockchain registration (in real implementation, queue this)
        setTimeout(async () => {
          await this.updateBlockchainStatus(documentId, 'registered', {
            txHash: '0x' + crypto.randomBytes(32).toString('hex'),
            blockNumber: Math.floor(Math.random() * 1000000) + 15000000
          });
        }, 2000);

        return {
          id: documentId,
          fileName,
          fileHash,
          blockchainStatus: 'pending',
          registrationTimestamp: new Date().toISOString()
        };
      } catch (error) {
        console.error('Document upload error:', error);
        throw error;
      }
    });
  }

  // Get documents for a specific HubSpot object
  async getDocumentsForObject(teamId, hubspotAccountId, objectType, objectId) {
    try {
      const result = await query(
        `SELECT dr.*
         FROM document_records dr
         WHERE dr.hubspot_account_id = $1
         AND dr.object_type = $2 AND dr.record_id = $3
         ORDER BY dr.created_at DESC`,
        [hubspotAccountId, objectType, objectId]
      );

      return result.rows.map(doc => ({
        id: doc.id,
        fileName: doc.file_name,
        blockchainStatus: doc.blockchain_status,
        registrationTimestamp: doc.created_at,
        hash: doc.document_hash,
        fileSize: doc.file_size,
        mimeType: doc.content_type,
        blockchainTxHash: doc.tx_hash,
        blockNumber: doc.block_number
      }));
    } catch (error) {
      console.error('Get documents error:', error);
      throw error;
    }
  }

  // Get all documents for a team
  async getTeamDocuments(teamId, limit = 50, offset = 0) {
    try {
      const result = await query(
        `SELECT d.*, bt.tx_hash as blockchain_tx_hash, bt.block_number
         FROM documents d
         LEFT JOIN blockchain_transactions bt ON d.id = bt.document_id AND bt.status = 'confirmed'
         WHERE d.team_id = $1
         ORDER BY d.created_at DESC
         LIMIT $2 OFFSET $3`,
        [teamId, limit, offset]
      );

      return result.rows.map(doc => ({
        id: doc.id,
        fileName: doc.file_name,
        blockchainStatus: doc.blockchain_status,
        registrationTimestamp: doc.created_at,
        hash: doc.file_hash,
        fileSize: doc.file_size,
        mimeType: doc.mime_type,
        hubspotObject: {
          type: doc.hubspot_object_type,
          id: doc.hubspot_object_id
        },
        blockchainTxHash: doc.blockchain_tx_hash,
        blockNumber: doc.block_number
      }));
    } catch (error) {
      console.error('Get team documents error:', error);
      throw error;
    }
  }

  // Log document access
  async logDocumentAccess(documentId, userId, accessType, metadata = {}) {
    try {
      const sessionId = uuidv4();

      const result = await query(
        `INSERT INTO access_logs
         (document_id, user_id, team_id, access_type, session_id, watermark_applied, watermark_data, ip_address)
         VALUES ($1, $2, (SELECT team_id FROM documents WHERE id = $1), $3, $4, $5, $6, $7)
         RETURNING id, session_id, created_at`,
        [
          documentId,
          userId,
          accessType,
          sessionId,
          metadata.watermarkApplied || false,
          metadata.watermarkData || {},
          metadata.ipAddress || null
        ]
      );

      // Create compliance event
      await query(
        `INSERT INTO compliance_events
         (team_id, document_id, event_type, event_data, user_id, ip_address)
         VALUES ((SELECT team_id FROM documents WHERE id = $1), $1, $2, $3, $4, $5)`,
        [
          documentId,
          'document_access',
          { accessType, sessionId, metadata },
          userId,
          metadata.ipAddress
        ]
      );

      return {
        logId: result.rows[0].id,
        sessionId: result.rows[0].session_id,
        accessTime: result.rows[0].created_at
      };
    } catch (error) {
      console.error('Document access logging error:', error);
      throw error;
    }
  }

  // Get access logs for a record or document
  async getAccessLogs(recordId, documentId = null, limit = 100, offset = 0) {
    try {
      console.log('🔍 getAccessLogs called with:', { recordId, documentId, limit, offset });

      let query_text, params;

      if (documentId) {
        query_text = `
          SELECT al.*, u.name as user_name, u.email as user_email, dr.file_name
          FROM access_logs al
          LEFT JOIN users u ON al.user_id = u.id
          LEFT JOIN document_records dr ON al.document_id = dr.id
          WHERE al.record_id::text = $1 AND al.document_id = $2
          ORDER BY al.created_at DESC
          LIMIT $3 OFFSET $4
        `;
        params = [recordId, documentId, limit, offset];
        console.log('🔍 Using query with documentId filter');
      } else {
        query_text = `
          SELECT al.*, u.name as user_name, u.email as user_email, dr.file_name
          FROM access_logs al
          LEFT JOIN users u ON al.user_id = u.id
          LEFT JOIN document_records dr ON al.document_id = dr.id
          WHERE al.record_id::text = $1
          ORDER BY al.created_at DESC
          LIMIT $2 OFFSET $3
        `;
        params = [recordId, limit, offset];
        console.log('🔍 Using query for all logs for record');
      }

      console.log('🔍 Final query:', query_text.replace(/\s+/g, ' ').trim());
      console.log('🔍 Query params:', params);

      const result = await query(query_text, params);

      console.log('🔍 Raw query result:', {
        rowCount: result.rows.length,
        sample: result.rows.length > 0 ? {
          id: result.rows[0].id,
          record_id: result.rows[0].record_id,
          document_id: result.rows[0].document_id,
          file_name: result.rows[0].file_name,
          user_name: result.rows[0].user_name,
          access_type: result.rows[0].access_type,
          created_at: result.rows[0].created_at
        } : null
      });

      const mappedResults = result.rows.map(log => ({
        id: log.id,
        fileName: log.file_name || 'Unknown Document',
        userName: log.user_name || 'Anonymous User',
        userEmail: log.user_email,
        accessType: log.access_type,
        accessTimestamp: log.created_at,
        sessionId: log.session_id,
        blockchainStatus: 'Registered', // Could be derived from document status
        watermarkApplied: log.watermark_applied
      }));

      console.log('🔍 Mapped results:', {
        count: mappedResults.length,
        sample: mappedResults.length > 0 ? mappedResults[0] : null
      });

      return mappedResults;
    } catch (error) {
      console.error('❌ Get access logs error:', error);
      throw error;
    }
  }

  // Update blockchain status
  async updateBlockchainStatus(documentId, status, transactionData = {}) {
    return await transaction(async (client) => {
      try {
        // Update document status
        await client.query(
          `UPDATE documents SET blockchain_status = $1, updated_at = NOW() WHERE id = $2`,
          [status, documentId]
        );

        // If transaction data provided, store it
        if (transactionData.txHash) {
          await client.query(
            `INSERT INTO blockchain_transactions
             (document_id, team_id, tx_hash, network, block_number, status, metadata)
             VALUES ($1, (SELECT team_id FROM documents WHERE id = $1), $2, $3, $4, $5, $6)
             ON CONFLICT (tx_hash) DO UPDATE SET
             status = $5, block_number = $4, updated_at = NOW()`,
            [
              documentId,
              transactionData.txHash,
              transactionData.network || 'ethereum',
              transactionData.blockNumber || null,
              'confirmed',
              transactionData
            ]
          );
        }

        // Create compliance event
        await client.query(
          `INSERT INTO compliance_events
           (team_id, document_id, event_type, event_data)
           VALUES ((SELECT team_id FROM documents WHERE id = $1), $1, $2, $3)`,
          [
            documentId,
            'blockchain_registration',
            { status, transactionData }
          ]
        );

        return true;
      } catch (error) {
        console.error('Blockchain status update error:', error);
        throw error;
      }
    });
  }

  // Get compliance statistics for a hubspot account
  async getComplianceStats(hubspotAccountId) {
    try {
      const [documentsStats, accessStats, statusBreakdown] = await Promise.all([
        // Document counts from document_records
        query(
          `SELECT COUNT(*) as total_documents,
           COUNT(CASE WHEN blockchain_status = 'Registered on Blockchain' THEN 1 END) as blockchain_registered
           FROM document_records WHERE hubspot_account_id = $1`,
          [hubspotAccountId]
        ),

        // Access event counts for this account's documents
        query(
          `SELECT COUNT(*) as total_access_events,
           COUNT(CASE WHEN al.created_at >= NOW() - INTERVAL '30 days' THEN 1 END) as recent_access_events
           FROM access_logs al
           WHERE al.record_id::text IN (
             SELECT dr.record_id FROM document_records dr
             WHERE dr.hubspot_account_id = $1
           )`,
          [hubspotAccountId]
        ),

        // Status breakdown from document_records
        query(
          `SELECT blockchain_status, COUNT(*) as count
           FROM document_records WHERE hubspot_account_id = $1
           GROUP BY blockchain_status`,
          [hubspotAccountId]
        )
      ]);

      const stats = {
        totalDocuments: parseInt(documentsStats.rows[0].total_documents),
        blockchainRegistered: parseInt(documentsStats.rows[0].blockchain_registered),
        totalAccessEvents: parseInt(accessStats.rows[0].total_access_events),
        recentAccessEvents: parseInt(accessStats.rows[0].recent_access_events)
      };

      // Add status breakdown
      const statusBreakdownObj = {};
      statusBreakdown.rows.forEach(row => {
        statusBreakdownObj[row.blockchain_status] = parseInt(row.count);
      });

      return {
        stats,
        blockchainStatusBreakdown: statusBreakdownObj
      };
    } catch (error) {
      console.error('Compliance stats error:', error);
      throw error;
    }
  }
}

module.exports = new DocumentService();