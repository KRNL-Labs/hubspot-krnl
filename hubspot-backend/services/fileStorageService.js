const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

// S3-compatible configuration for Supabase Storage
const s3Endpoint = process.env.SUPABASE_S3_ENDPOINT;
const s3Region = process.env.SUPABASE_S3_REGION || 'us-east-1';
const s3AccessKeyId = process.env.SUPABASE_S3_ACCESS_KEY_ID;
const s3SecretAccessKey = process.env.SUPABASE_S3_SECRET_ACCESS_KEY;
const supabaseBucket = process.env.SUPABASE_BUCKET || 'documents';

// Initialize Supabase client
let supabase = null;
if (supabaseUrl && supabaseServiceKey) {
  supabase = createClient(supabaseUrl, supabaseServiceKey);
  console.log('✅ Supabase client initialized');
} else {
  console.error('❌ Supabase configuration missing for database operations');
}

// Initialize S3 client
let s3Client = null;
if (s3Endpoint && s3AccessKeyId && s3SecretAccessKey) {
  s3Client = new S3Client({
    endpoint: s3Endpoint,
    region: s3Region,
    credentials: {
      accessKeyId: s3AccessKeyId,
      secretAccessKey: s3SecretAccessKey
    },
    forcePathStyle: true // Required for Supabase S3 compatibility
  });
  console.log('✅ S3 client initialized for Supabase Storage');
} else {
  console.warn('⚠️ Supabase S3 configuration missing, file storage uploads will be skipped');
}

/**
 * Store a file buffer in Supabase Storage and compute SHA-256 hash
 * @param {Object} params
 * @param {Buffer} params.buffer - Raw file bytes
 * @param {string} params.recordId - HubSpot record ID
 * @param {string} params.fileName - Original file name
 * @param {string} params.contentType - MIME type
 * @returns {Promise<{hash: string, storage: Object}>}
 */
async function storeFileAndHash({ buffer, recordId, fileName, contentType }) {
  if (!buffer || !buffer.length) {
    throw new Error('File buffer is required for storage and hashing');
  }

  // Compute deterministic SHA-256 hash
  const hashHex = crypto.createHash('sha256').update(buffer).digest('hex');
  const hash = `0x${hashHex}`;

  console.log('📁 File hash computed:', hash);

  // If S3 client not configured, fail the upload
  if (!s3Client) {
    throw new Error('File storage not configured - missing Supabase S3 credentials (SUPABASE_S3_ENDPOINT, SUPABASE_S3_ACCESS_KEY_ID, SUPABASE_S3_SECRET_ACCESS_KEY)');
  }

  // Prepare safe file path
  const safeRecordId = recordId || 'unknown';
  const safeFileName = fileName && fileName.trim().length > 0
    ? fileName.replace(/[^A-Za-z0-9._-]/g, '_')
    : `${safeRecordId}.pdf`;

  const path = `${safeRecordId}/${safeFileName}`;

  console.log('📤 Uploading file to Supabase Storage:', {
    bucket: supabaseBucket,
    path,
    recordId: safeRecordId
  });

  try {
    const command = new PutObjectCommand({
      Bucket: supabaseBucket,
      Key: path,
      Body: buffer,
      ContentType: contentType || 'application/pdf'
    });

    await s3Client.send(command);

    console.log('✅ File uploaded to Supabase Storage successfully');

    return {
      hash,
      storage: {
        bucket: supabaseBucket,
        path
      }
    };
  } catch (error) {
    console.error('❌ Supabase Storage upload failed:', error);
    throw new Error(`File storage failed: ${error.message}`);
  }
}

/**
 * Store file metadata in database
 * @param {Object} record - File record data
 * @returns {Promise<Object>} Inserted record
 */
async function storeFileRecord(record) {
  if (!supabase) {
    throw new Error('Database not configured - missing Supabase credentials (SUPABASE_URL, SUPABASE_SERVICE_KEY)');
  }

  try {
    const {
      fileName,
      documentHash,
      storageBucket,
      storagePath,
      recordId,
      hubspotAccountId,
      objectType,
      fileSize,
      contentType,
      txHash,
      blockNumber,
      blockchainStatus
    } = record;

    const { data, error } = await supabase
      .from('document_records')
      .upsert({
        file_name: fileName,
        document_hash: documentHash,
        storage_bucket: storageBucket,
        storage_path: storagePath,
        record_id: recordId,
        hubspot_account_id: hubspotAccountId,
        object_type: objectType,
        file_size: fileSize || null,
        content_type: contentType || null,
        tx_hash: txHash || null,
        block_number: blockNumber || null,
        blockchain_status: blockchainStatus || 'Hash Generated',
        upload_timestamp: new Date().toISOString()
      }, { onConflict: 'document_hash' })
      .select()
      .single();

    if (error) {
      throw error;
    }

    console.log('✅ File metadata stored in database:', {
      id: data.id,
      documentHash,
      recordId
    });

    return data;
  } catch (error) {
    console.error('❌ Failed to store file metadata:', error);
    throw new Error(`Database storage failed: ${error.message}`);
  }
}

/**
 * Retrieve a file buffer from Supabase Storage via S3 API
 * @param {string} path - The file path in storage (e.g., "recordId/filename.pdf")
 * @returns {Promise<{buffer: Buffer, contentType: string, fileName: string}>}
 */
async function getSupabaseFileBuffer(path) {
  if (!s3Client) {
    throw new Error('S3 client not initialized, cannot retrieve file');
  }

  if (!path || typeof path !== 'string') {
    throw new Error('File path is required');
  }

  console.log('📂 Retrieving file from Supabase Storage via S3 API:', {
    bucket: supabaseBucket,
    path
  });

  try {
    const command = new GetObjectCommand({
      Bucket: supabaseBucket,
      Key: path
    });

    const response = await s3Client.send(command);

    // Convert stream to buffer
    const chunks = [];
    for await (const chunk of response.Body) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    const fileName = path.split('/').pop() || 'document';
    const contentType = response.ContentType || 'application/octet-stream';

    console.log('✅ File retrieved successfully from Supabase:', {
      path,
      size: buffer.length,
      contentType,
      fileName
    });

    return {
      buffer,
      contentType,
      fileName
    };
  } catch (error) {
    console.error('❌ Failed to retrieve file from Supabase:', {
      error: error.message,
      path
    });
    throw new Error(`Failed to retrieve file from storage: ${error.message}`);
  }
}

module.exports = {
  storeFileAndHash,
  storeFileRecord,
  getSupabaseFileBuffer
};