import React, { useState, useEffect } from 'react';
import {
  hubspot,
  Card,
  Button,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Input,
  Text,
  Heading,
  Flex,
  LoadingSpinner,
  Alert,
} from '@hubspot/ui-extensions';
import { DocumentUpload } from './DocumentUpload';
import { formatDate, getBlockchainStatusVariant } from './helpers';
import AccessShieldAPI from './apiService';

hubspot.extend((extensionProps) => {
  console.log('🔧 Extension props received:', extensionProps);
  console.log('🔧 Extension context:', extensionProps.context);
  console.log('🔧 Extension actions:', extensionProps.actions);
  console.log('🔧 Extension fetch:', extensionProps.fetch);
  console.log('🔧 All extension keys:', Object.keys(extensionProps));
  console.log('🔧 hubspot.fetch directly:', hubspot.fetch);
  console.log('🔧 hubspot object:', hubspot);
  console.log('🔧 typeof hubspot.fetch:', typeof hubspot.fetch);

  const { context, actions, runServerlessFunction } = extensionProps;
  return (
    <DocumentAccessCard
      context={context}
      actions={actions}
      runServerlessFunction={runServerlessFunction}
    />
  );
});

const DocumentAccessCard = ({ context, actions, runServerlessFunction }) => {
  console.log('🚀 DocumentAccessCard initialized');
  console.log('📋 Context received:', context);
  console.log('🔧 Actions available:', Object.keys(actions || {}));
  console.log('🔧 Actions details:', actions);
  console.log('🔧 runServerlessFunction available:', typeof runServerlessFunction);
  console.log('🔧 User info:', context.user);
  console.log('🔧 Portal info:', context.portal);

  // Check what CRM capabilities are available
  console.log('🔧 fetchCrmObjectProperties:', actions.fetchCrmObjectProperties);
  console.log('🔧 refreshObjectProperties:', actions.refreshObjectProperties);

  const [documents, setDocuments] = useState([]);
  const [accessLogs, setAccessLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSession, setSelectedSession] = useState(null);
  const [showSessionCard, setShowSessionCard] = useState(false);
  const [error, setError] = useState(null);
  const [apiService, setApiService] = useState(null);

  const objectId = context.crm?.objectId;
  const objectType = context.crm?.objectTypeId;

  console.log('📊 Object details:', { objectId, objectType, fullObjectType: context.crm?.objectType });

  useEffect(() => {
    console.log('🔧 Setting up hubspot.fetch API service...');

    if (typeof hubspot.fetch === 'function') {
      console.log('✅ hubspot.fetch is available, creating API service');
      const api = new AccessShieldAPI(hubspot.fetch, context);
      setApiService(api);
    } else {
      console.error('❌ hubspot.fetch not available');
      setError('HubSpot fetch API not available');
    }
  }, [objectId, context.user]);

  useEffect(() => {
    console.log('📡 Checking if ready to load data:', { objectId, hasApiService: !!apiService });
    if (objectId && apiService) {
      console.log('▶️ Starting data load...');
      loadData();
    } else {
      console.log('⏳ Waiting for objectId and apiService...', { objectId, hasApiService: !!apiService });
    }
  }, [objectId, apiService]);

  const loadData = async () => {
    console.log('📥 loadData called');
    setLoading(true);
    setError(null);

    try {
      console.log('📞 Making API calls...');
      console.log('🎯 API endpoints will be called with:', { objectType, objectId });

      const [documentsResponse, logsResponse] = await Promise.all([
        apiService.getDocuments(objectType, objectId),
        apiService.getAccessLogs(objectId)
      ]);

      console.log('📄 Documents response:', documentsResponse);
      console.log('📜 Logs response:', logsResponse);

      setDocuments(documentsResponse.documents || []);
      setAccessLogs(logsResponse.logs || []);

      console.log('✅ Data loaded successfully');
    } catch (err) {
      console.error('❌ Error loading data:', err);
      console.error('❌ Error details:', {
        message: err.message,
        stack: err.stack,
        name: err.name
      });
      setError('Failed to load documents and access logs: ' + err.message);
    } finally {
      console.log('🏁 Setting loading to false');
      setLoading(false);
    }
  };

  const handleUploadSuccess = async (uploadData) => {
    setUploading(false);
    await loadData();
    actions.addAlert({
      type: 'success',
      message: 'Document uploaded and registered successfully!'
    });
  };

  const handleViewDocument = async (document) => {
    try {
      // Log the access using external API
      await apiService.logAccess(
        document.id,
        context.user?.id || 'unknown',
        'view',
        { documentHash: document.hash }
      );

      // For now, show document info - in full implementation, this would open a secure viewer
      actions.addAlert({
        type: 'success',
        message: `Viewing document: ${document.name} (Hash: ${document.hash?.substring(0, 8)}...)`
      });

      await loadData(); // Refresh logs
    } catch (err) {
      setError('Failed to open document: ' + err.message);
      console.error('Error opening document:', err);
    }
  };

  const handleViewSession = async (sessionId) => {
    try {
      // For now, show session info from access logs
      const session = accessLogs.find(log => log.id === sessionId);
      setSelectedSession(session || { id: sessionId, status: 'Session details not available' });
      setShowSessionCard(true);
    } catch (err) {
      setError('Failed to load session details: ' + err.message);
      console.error('Error loading session:', err);
    }
  };

  const filteredLogs = accessLogs.filter(log =>
    log.fileName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    log.accessType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    console.log('🔄 Rendering loading state');
    return (
      <Card>
        <Flex direction="column" gap="medium" justify="center" align="center">
          <LoadingSpinner />
          <Text>Loading AccessShield...</Text>
        </Flex>
      </Card>
    );
  }

  console.log('🎨 Rendering main component with data:', {
    documentsCount: documents.length,
    logsCount: accessLogs.length,
    hasError: !!error
  });

  return (
    <Card>
      <Flex direction="column" gap="medium">
        <Heading>AccessShield by KRNL</Heading>

        {error && (
          <Alert variant="error" title="Error">
            {error}
          </Alert>
        )}

        <Text variant="microcopy">
          Secure document management with blockchain verification and identity-bound watermarking.
        </Text>

        {/* Quick Status */}
        {documents.length > 0 ? (
          <Card>
            <Flex direction="column" gap="small">
              <Text weight="bold">Latest Document</Text>
              <Text variant="microcopy">
                {documents[0]?.fileName} - {documents[0]?.blockchainStatus}
              </Text>
              <Text variant="microcopy">
                Go to the Dashboard tab for full document management.
              </Text>
            </Flex>
          </Card>
        ) : (
          <Card>
            <Flex direction="column" gap="small">
              <Text weight="bold">No Documents Yet</Text>
              <Text variant="microcopy">
                Go to the Dashboard tab to upload and manage documents.
              </Text>
            </Flex>
          </Card>
        )}
      </Flex>
    </Card>
  );
};

export default DocumentAccessCard;