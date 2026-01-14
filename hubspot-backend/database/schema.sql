-- AccessShield Document Records Table
-- This table stores metadata for all uploaded documents

CREATE TABLE IF NOT EXISTS document_records (
    id BIGSERIAL PRIMARY KEY,

    -- File information
    file_name VARCHAR(500) NOT NULL,
    document_hash VARCHAR(66) UNIQUE NOT NULL, -- 0x + 64 hex chars
    storage_bucket VARCHAR(100),
    storage_path VARCHAR(1000),

    -- HubSpot information
    record_id VARCHAR(50) NOT NULL, -- HubSpot object ID
    hubspot_account_id VARCHAR(50) NOT NULL,
    object_type VARCHAR(50) NOT NULL, -- contact, company, deal, etc.

    -- File metadata
    file_size BIGINT,
    content_type VARCHAR(100),

    -- Blockchain information
    tx_hash VARCHAR(66), -- Transaction hash (nullable)
    block_number BIGINT, -- Block number (nullable)
    blockchain_status VARCHAR(50) DEFAULT 'Hash Generated',

    -- Timestamps
    upload_timestamp TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_document_records_hubspot_account
    ON document_records(hubspot_account_id);

CREATE INDEX IF NOT EXISTS idx_document_records_record_id
    ON document_records(record_id);

CREATE INDEX IF NOT EXISTS idx_document_records_object_type
    ON document_records(hubspot_account_id, object_type);

CREATE INDEX IF NOT EXISTS idx_document_records_hash
    ON document_records(document_hash);

CREATE INDEX IF NOT EXISTS idx_document_records_upload_time
    ON document_records(upload_timestamp DESC);

-- Comments for documentation
COMMENT ON TABLE document_records IS 'Stores metadata for all uploaded documents with blockchain registration info';
COMMENT ON COLUMN document_records.document_hash IS 'SHA-256 hash of file content with 0x prefix';
COMMENT ON COLUMN document_records.record_id IS 'HubSpot object ID (numeric)';
COMMENT ON COLUMN document_records.blockchain_status IS 'Status: Hash Generated, Registered on Blockchain, Registration Failed, Configuration Missing';
COMMENT ON COLUMN document_records.storage_path IS 'Path in Supabase storage: {recordId}/{filename}';