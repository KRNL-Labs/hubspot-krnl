import React, { useState, useEffect } from 'react';
import {
  Button,
  Flex,
  Text,
  LoadingSpinner,
  Alert,
  Card,
} from '@hubspot/ui-extensions';

export const DocumentUpload = ({
  onUploadStart,
  onUploadSuccess,
  onUploadError,
  objectId,
  objectType,
  disabled,
  crmService,
  actions,
  context
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState('');

  // Initialize upload URL on component mount
  useEffect(() => {
    // Use the viewer project for upload UI (matches design exactly)
    const viewerBaseUrl = 'http://localhost:5173'; // Local dev server for testing
    // Fallback for objectType if undefined
    const finalObjectType = objectType || 'contact';
    const hubspotAccountId = context?.portal?.id || '244763631';
    const uploadPageUrl = `${viewerBaseUrl}/upload?objectId=${objectId}&objectType=${finalObjectType}&hubspotAccountId=${hubspotAccountId}`;
    console.log('🔗 Generated upload URL:', uploadPageUrl);
    setUploadUrl(uploadPageUrl);
  }, [objectId, objectType, context]);

  // Check for upload success in URL parameters (when user returns from external page)
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const uploadSuccess = urlParams.get('uploadSuccess');
    const fileName = urlParams.get('fileName');
    const fileSize = urlParams.get('fileSize');
    const documentId = urlParams.get('documentId');

    if (uploadSuccess === 'true' && fileName) {
      setSelectedFile({
        name: fileName,
        size: parseInt(fileSize) || 0,
        type: 'uploaded'
      });

      // Notify parent of successful upload
      onUploadSuccess({
        success: true,
        document: {
          id: documentId,
          fileName: fileName,
          fileSize: parseInt(fileSize) || 0
        }
      });

      // Document uploaded successfully - parent component will handle refresh

      // Clean up URL parameters
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, '', cleanUrl);
    }
  }, [onUploadSuccess]);

  const handleDebugClick = () => {
    console.log('🔘 Button clicked!');
    console.log('🔘 Upload URL:', uploadUrl);
    console.log('🔘 Selected file:', selectedFile);
  };

  const handleUploadClick = () => {
    handleDebugClick();

    if (!uploadUrl) return;

    actions.openIframeModal({
      uri: uploadUrl,
      height: 800,
      width: 1200,
      title: '',
      flush: true
    }, () => {
      console.log('Upload modal closed');
    });
  };

  const handleClearFile = () => {
    setSelectedFile(null);
  };


  return (
    <Flex direction="column" gap="medium">
      <Text variant="microcopy">
        Upload documents for blockchain registration and secure access tracking.
      </Text>

      {/* File Selection Area */}
      <Flex direction="column" gap="small">
        {selectedFile ? (
          <Flex direction="column" gap="small">
            <Text weight="bold">Selected File:</Text>
            <Flex justify="between" align="center">
              <Flex direction="column" gap="extraSmall">
                <Text>{selectedFile.name}</Text>
                <Text variant="microcopy">
                  {Math.round(selectedFile.size / 1024)}KB - {selectedFile.type}
                </Text>
              </Flex>
              <Button
                variant="secondary"
                size="small"
                onClick={handleClearFile}
              >
                Clear
              </Button>
            </Flex>
          </Flex>
        ) : (
          <Text variant="microcopy"></Text>
        )}
      </Flex>

      {/* Upload Controls */}
      <Flex gap="medium" justify="center">
        <Button
          variant="primary"
          onClick={handleUploadClick}
          disabled={disabled || !uploadUrl}
        >
          Upload Document
        </Button>
      </Flex>

      {/* Instructions */}
      <Text variant="microcopy" style={{ textAlign: 'center', fontStyle: 'italic' }}>
        Click "Upload Document" to open the upload page
      </Text>
    </Flex>
  );
};