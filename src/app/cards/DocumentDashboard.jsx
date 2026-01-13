import React, { useState, useEffect } from 'react';
import {
  hubspot,
  Card,
  Flex,
  Heading,
  Text,
  LoadingSpinner,
  Alert,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
  LoadingButton,
  Input
} from '@hubspot/ui-extensions';
import { formatDate, getBlockchainStatusVariant } from './helpers';
import AccessShieldAPI from './apiService';
import { DocumentUpload } from './DocumentUpload';

hubspot.extend((extensionProps) => {
  console.log('📊 Dashboard Extension props received:', extensionProps);
  console.log('📊 Dashboard Extension context:', extensionProps.context);
  console.log('📊 Dashboard Extension actions:', extensionProps.actions);
  console.log('📊 Dashboard Extension fetch:', extensionProps.fetch);
  console.log('📊 Dashboard All extension keys:', Object.keys(extensionProps));

  const { context, actions, runServerlessFunction } = extensionProps;
  return (
    <DocumentDashboard
      context={context}
      actions={actions}
      runServerlessFunction={runServerlessFunction}
      openIframeModal={actions.openIframeModal}
    />
  );
});

const DocumentDashboard = ({ context, actions, runServerlessFunction, openIframeModal }) => {
  console.log('📊 DocumentDashboard initialized');
  console.log('📋 Dashboard Context:', context);
  console.log('🔧 Dashboard Actions:', Object.keys(actions || {}));
  console.log('🔧 Dashboard runServerlessFunction:', typeof runServerlessFunction);
  console.log('🔧 Dashboard User info:', context.user);
  console.log('🔧 Dashboard Portal info:', context.portal);

  const [stats, setStats] = useState({
    totalDocuments: 0,
    blockchainRegistered: 0,
    totalAccessEvents: 0,
    recentAccessEvents: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [apiService, setApiService] = useState(null);
  const [viewButtonLoading, setViewButtonLoading] = useState(false);
  const [result, setResult] = useState("");

  const objectId = context.crm?.objectId;

  // Map HubSpot objectTypeId to proper string format
  const getObjectType = () => {
    const typeId = context.crm?.objectTypeId;
    switch (typeId) {
      case '0-1': return 'contact';
      case '0-2': return 'contact';
      case '0-3': return 'company';
      case '0-4': return 'deal';
      default: return context.crm?.objectType || 'contact';
    }
  };
  const objectType = getObjectType();

  useEffect(() => {
    console.log('📊 Dashboard setting up hubspot.fetch API service...');

    if (typeof hubspot.fetch === 'function') {
      console.log('✅ Dashboard hubspot.fetch is available, creating API service');
      const api = new AccessShieldAPI(hubspot.fetch, context);
      setApiService(api);
    } else {
      console.error('❌ Dashboard: hubspot.fetch not available');
      setError('HubSpot fetch API not available');
    }
  }, [context.user]);

  useEffect(() => {
    console.log('📊 Dashboard checking API service:', { hasApiService: !!apiService });
    if (apiService) {
      console.log('▶️ Dashboard starting data load...');
      loadDashboardData();
    } else {
      console.log('⏳ Dashboard waiting for API service...');
    }
  }, [apiService]);

  const loadDashboardData = async () => {
    console.log('📊 Dashboard loadData called');
    setLoading(true);
    setError(null);

    try {
      const objectId = context.crm?.objectId;
      const objectType = getObjectType();

      console.log('📊 Dashboard object details:', { objectId, objectType, objectTypeId: context.crm?.objectTypeId });

      console.log('📞 Dashboard making API calls...');
      const [statsResponse, activityResponse, documentsResponse] = await Promise.all([
        apiService.getComplianceStats(objectType, objectId),
        apiService.getAccessLogs(objectId),
        apiService.getDocuments(objectType, objectId)
      ]);

      console.log('📈 Dashboard stats response:', statsResponse);
      console.log('📈 Dashboard activity response:', activityResponse);
      console.log('📈 Dashboard documents response:', documentsResponse);

      setStats(statsResponse.stats || {});
      setRecentActivity(activityResponse.logs || []);
      setDocuments(documentsResponse.documents || []);

      console.log('✅ Dashboard data loaded successfully');
    } catch (err) {
      console.error('❌ Dashboard error loading data:', err);
      console.error('❌ Dashboard error details:', {
        message: err.message,
        stack: err.stack,
        name: err.name
      });
      setError('Failed to load dashboard data: ' + err.message);
    } finally {
      console.log('🏁 Dashboard setting loading to false');
      setLoading(false);
    }
  };

  const handleUploadStart = () => {
    setUploading(true);
    setUploadError(null);
  };

  const handleUploadSuccess = async (uploadData) => {
    setUploading(false);
    await loadDashboardData();
    actions.addAlert({
      type: 'success',
      message: 'Document uploaded and registered successfully!'
    });
  };

  const handleUploadError = (error) => {
    setUploading(false);
    setUploadError(error.message);
    actions.addAlert({
      type: 'error',
      message: 'Upload failed: ' + error.message
    });
  };

  const handleViewDocument = async (document) => {
    console.log('🔍 View document clicked:', document);
    setViewButtonLoading(true);

    try {
      const objectId = context.crm?.objectId;
      const objectType = getObjectType();
      const userId = context.user?.email || context.user?.id || 'anonymous';

      console.log('📞 Calling access init API...', {
        documentHash: document.documentHash,
        documentId: document.storagePath || document.id,
        recordType: objectType,
        recordId: objectId,
        userId: userId,
        accessType: 'view',
        fileName: document.fileName
      });

      // Call backend /api/access/init to start KRNL workflow using hubspot.fetch
      const response = await hubspot.fetch('https://051892e58926.ngrok-free.app/api/access/init', {
        method: 'POST',
        body: {
          documentHash: document.documentHash,
          documentId: document.storagePath || document.id,
          recordId: objectId, // Just the numeric ID, not prefixed
          userId: userId,
          accessType: 'view',
          fileName: document.fileName,
          clientIP: '',
          userAgent: navigator.userAgent
        }
      });

      console.log('📞 Access init response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Access init error response:', errorText);
        throw new Error('Failed to initialize document access');
      }

      const result = await response.json();
      console.log('✅ Access init success:', result);

      if (result && result.viewerSessionUrl) {
        // Open the viewer URL in an iframe modal
        openIframeModal({
          uri: result.viewerSessionUrl,
          height: 800,
          width: 1200,
          title: `Document Viewer - ${document.fileName}`,
          flush: true
        }, () => {
          console.log('Document viewer modal closed');
        });

        actions.addAlert({
          type: 'success',
          message: 'Opening secure viewer...'
        });
      } else {
        throw new Error('No viewer URL received from access init');
      }
    } catch (error) {
      console.error('❌ View document error:', error);
      actions.addAlert({
        type: 'error',
        message: 'Failed to open document viewer: ' + error.message
      });
    } finally {
      setViewButtonLoading(false);
    }
  };

  const handleSessionView = async (sessionId) => {
    try {
      // For now, show session info from recent activity
      const session = recentActivity.find(activity => activity.id === sessionId);

      if (session) {
        actions.addAlert({
          type: 'success',
          message: `Session ${sessionId}: ${session.action} by ${session.userEmail || 'Unknown user'} at ${formatDate(session.accessTime)}`
        });
      } else {
        actions.addAlert({
          type: 'info',
          message: `Session ${sessionId} details not available`
        });
      }
    } catch (err) {
      setError('Failed to load session details: ' + err.message);
      console.error('Error loading session:', err);
    }
  };

  const filteredActivity = recentActivity.filter(activity =>
    activity.fileName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.userName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    activity.accessType?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const complianceCoverage = stats.totalDocuments > 0
    ? Math.round((stats.blockchainRegistered / stats.totalDocuments) * 100)
    : 0;

  if (loading) {
    return (
      <Flex justify="center" align="center" style={{ minHeight: '200px' }}>
        <LoadingSpinner />
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap="large">
      <Heading>AccessShield Dashboard</Heading>

      <Text>
        Welcome to AccessShield by KRNL. This dashboard provides a quick overview
        of tracked documents and recent access activity.
      </Text>

      {error && (
        <Alert variant="error" title="Error">
          {error}
        </Alert>
      )}

      {/* Document Upload Section */}
      <Card>
        <Flex direction="column" gap="medium">
          <Heading level={2}>Document Upload</Heading>
          {uploadError && (
            <Alert variant="error" title="Upload Error">
              {uploadError}
            </Alert>
          )}
          <DocumentUpload
            onUploadStart={handleUploadStart}
            onUploadSuccess={handleUploadSuccess}
            onUploadError={handleUploadError}
            objectId={objectId}
            objectType={objectType}
            disabled={uploading}
            crmService={apiService}
            actions={actions}
            context={context}
          />
        </Flex>
      </Card>

      {/* Key Performance Indicators */}
      <Card>
        <Heading level={2}>Key Metrics</Heading>
        <Flex gap="medium" wrap="wrap">
          <Card
            title="Tracked Documents"
            value={stats.totalDocuments}
            icon="document"
          />
          <Card
            title="Blockchain Registered"
            value={stats.blockchainRegistered}
            icon="shield"
          />
          <Card
            title="Total Access Events"
            value={stats.totalAccessEvents}
            icon="eye"
          />
          <Card
            title="Compliance Coverage"
            value={`${complianceCoverage}%`}
            icon="chart"
          />
        </Flex>
      </Card>

      {/* Document History */}
      <Card>
        <Flex direction="column" gap="medium">
          <Heading level={2}>Document History</Heading>
          {documents && documents.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>File Name</TableHeader>
                  <TableHeader>Upload Date</TableHeader>
                  <TableHeader>Blockchain Status</TableHeader>
                  <TableHeader>File Size</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>
                      <Text>{doc.fileName}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{formatDate(doc.registrationTimestamp || doc.uploadedAt)}</Text>
                    </TableCell>
                    <TableCell>
                      <Text variant={getBlockchainStatusVariant(doc.blockchainStatus)}>
                        {doc.blockchainStatus}
                      </Text>
                    </TableCell>
                    <TableCell>
                      <Text>{Math.round((doc.fileSize || 0) / 1024)}KB</Text>
                    </TableCell>
                    <TableCell>
                      <LoadingButton
                        variant="primary"
                        size="small"
                        onClick={() => handleViewDocument(doc)}
                        loading={viewButtonLoading}
                      >
                        {viewButtonLoading ? 'Loading...' : 'View'}
                      </LoadingButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Flex justify="center" align="center" style={{ padding: '40px' }}>
              <Flex direction="column" align="center" gap="small">
                <Text variant="microcopy">No documents uploaded yet</Text>
                <Text variant="microcopy">
                  Upload a document above to see it appear in this history.
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Card>

      {/* Access History */}
      <Card>
        <Flex direction="column" gap="medium">
          <Heading level={2}>Access History</Heading>

          <Input
            placeholder="Search recent activity..."
            value={searchTerm}
            onChange={(value) => setSearchTerm(value)}
          />

          {filteredActivity.length > 0 ? (
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>Time</TableHeader>
                  <TableHeader>Document</TableHeader>
                  <TableHeader>Access Type</TableHeader>
                  <TableHeader>User</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Session</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredActivity.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell>
                      <Text>{formatDate(activity.accessTimestamp)}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{activity.fileName || 'Unknown Document'}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{activity.accessType}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{activity.userName}</Text>
                    </TableCell>
                    <TableCell>
                      <Text variant={getBlockchainStatusVariant(activity.blockchainStatus)}>
                        {activity.blockchainStatus}
                      </Text>
                    </TableCell>
                    <TableCell>
                      {activity.sessionId ? (
                        <LoadingButton
                          variant="secondary"
                          size="small"
                          onClick={() => handleSessionView(activity.sessionId)}
                        >
                          View
                        </LoadingButton>
                      ) : (
                        <Text variant="microcopy">N/A</Text>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Flex justify="center" align="center" style={{ padding: '40px' }}>
              <Flex direction="column" align="center" gap="small">
                <Text variant="microcopy">No access events yet</Text>
                <Text variant="microcopy">
                  Once users start viewing documents via KRNL, activity will appear here.
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Card>

      {/* Blockchain Status Breakdown */}
      {stats.blockchainStatusBreakdown && (
        <Card>
          <Heading level={2}>Document Status Breakdown</Heading>
          <Flex gap="medium" wrap="wrap">
            {Object.entries(stats.blockchainStatusBreakdown).map(([status, count]) => (
              <Card
                key={status}
                title={status}
                value={count}
                variant={getBlockchainStatusVariant(status)}
              />
            ))}
          </Flex>
        </Card>
      )}

      {/* Access Type Breakdown */}
      {stats.accessTypeBreakdown && (
        <Card>
          <Heading level={2}>Access Type Breakdown (Last 30 Days)</Heading>
          <Flex gap="medium" wrap="wrap">
            {Object.entries(stats.accessTypeBreakdown).map(([type, count]) => (
              <Card
                key={type}
                title={type}
                value={count}
                icon="activity"
              />
            ))}
          </Flex>
        </Card>
      )}
    </Flex>
  );
};

export default DocumentDashboard;