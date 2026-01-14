-- Update access_logs table schema
-- 1. Remove download_url column
-- 2. Add access_hash column
-- 3. Rename team_id to record_id (if team_id exists)

-- Check if team_id column exists and rename it to record_id
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'access_logs'
    AND column_name = 'team_id'
    AND table_schema = 'public'
  ) THEN
    ALTER TABLE public.access_logs RENAME COLUMN team_id TO record_id;
    RAISE NOTICE 'Renamed team_id to record_id';
  ELSE
    RAISE NOTICE 'team_id column does not exist, skipping rename';
  END IF;
END $$;

-- Remove download_url column if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'access_logs'
    AND column_name = 'download_url'
    AND table_schema = 'public'
  ) THEN
    ALTER TABLE public.access_logs DROP COLUMN download_url;
    RAISE NOTICE 'Removed download_url column';
  ELSE
    RAISE NOTICE 'download_url column does not exist, skipping removal';
  END IF;
END $$;

-- Add access_hash column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'access_logs'
    AND column_name = 'access_hash'
    AND table_schema = 'public'
  ) THEN
    ALTER TABLE public.access_logs ADD COLUMN access_hash character varying(66);
    RAISE NOTICE 'Added access_hash column';
  ELSE
    RAISE NOTICE 'access_hash column already exists, skipping addition';
  END IF;
END $$;

-- Update foreign key constraint name if needed (from team_id to record_id)
DO $$
BEGIN
  -- Drop old team_id foreign key constraint if it exists
  IF EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE table_name = 'access_logs'
    AND constraint_name = 'access_logs_team_id_fkey'
    AND table_schema = 'public'
  ) THEN
    ALTER TABLE public.access_logs DROP CONSTRAINT access_logs_team_id_fkey;
    RAISE NOTICE 'Dropped old team_id foreign key constraint';
  END IF;

  -- Add new record_id foreign key constraint if record_id column exists and constraint doesn't exist
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'access_logs'
    AND column_name = 'record_id'
    AND table_schema = 'public'
  ) AND NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE table_name = 'access_logs'
    AND constraint_name = 'access_logs_record_id_fkey'
    AND table_schema = 'public'
  ) THEN
    -- Note: This assumes you have a records or similar table
    -- You may need to adjust the referenced table based on your schema
    -- ALTER TABLE public.access_logs ADD CONSTRAINT access_logs_record_id_fkey
    --   FOREIGN KEY (record_id) REFERENCES records (id) ON DELETE CASCADE;
    RAISE NOTICE 'record_id column exists - you may need to add appropriate foreign key constraint manually';
  END IF;
END $$;

-- Update indexes
-- Drop old index on team_id if it exists
DROP INDEX IF EXISTS idx_access_logs_team_created;

-- Create new index on record_id if column exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'access_logs'
    AND column_name = 'record_id'
    AND table_schema = 'public'
  ) THEN
    CREATE INDEX IF NOT EXISTS idx_access_logs_record_created
      ON public.access_logs USING btree (record_id, created_at desc);
    RAISE NOTICE 'Created index on record_id, created_at';
  END IF;
END $$;

-- Create index on access_hash for performance
CREATE INDEX IF NOT EXISTS idx_access_logs_access_hash
  ON public.access_logs USING btree (access_hash);

-- Show the updated table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'access_logs'
AND table_schema = 'public'
ORDER BY ordinal_position;