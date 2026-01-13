// AccessShield API Service - Direct API integration using hubspot.fetch
// HubSpot automatically signs requests and includes metadata
const API_BASE_URL = 'https://051892e58926.ngrok-free.app';

class AccessShieldAPI {
  constructor(hubspotFetch = null, context = null) {
    this.baseURL = API_BASE_URL;
    this.fetch = hubspotFetch; // Use HubSpot's fetch method
    this.context = context; // Store context for portal/user info
    console.log('🔧 AccessShieldAPI initialized with baseURL:', this.baseURL);
    console.log('🌐 Fetch function type:', typeof hubspotFetch);
    console.log('👤 Context available:', !!context);
  }

  // Set the hubspot fetch method
  setFetch(hubspotFetch) {
    this.fetch = hubspotFetch;
  }

  // Upload document to AccessShield backend
  async uploadDocument(file, objectId, objectType, metadata = {}) {
    console.log('📤 API: uploadDocument called', { fileName: file?.name, objectId, objectType, metadata });

    if (!this.fetch) {
      console.error('❌ API: HubSpot fetch not initialized for upload');
      throw new Error('HubSpot fetch not initialized');
    }

    const formData = new FormData();
    formData.append('document', file);
    formData.append('objectId', objectId);
    formData.append('objectType', objectType);
    formData.append('metadata', JSON.stringify(metadata));

    const url = `${this.baseURL}/api/upload-document`;
    console.log('📤 API: Making upload request to:', url);

    try {
      const response = await this.fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('📤 API: Upload response status:', response.status);
      console.log('📤 API: Upload response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API: Upload error response:', errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: errorText };
        }
        throw new Error(errorData.error || 'Upload failed');
      }

      const result = await response.json();
      console.log('📤 API: Upload success:', result);
      return result;
    } catch (error) {
      console.error('❌ API: uploadDocument error:', error);
      throw error;
    }
  }

  // Get documents for a HubSpot record (multi-tenant)
  async getDocuments(objectType, objectId) {
    console.log('📄 API: getDocuments called', { objectType, objectId });

    if (!this.fetch) {
      console.error('❌ API: HubSpot fetch not initialized');
      throw new Error('HubSpot fetch not initialized');
    }

    const portalId = this.context?.portal?.id;
    const teamId = 'default'; // For now, using default team

    if (!portalId) {
      throw new Error('Portal ID not available');
    }

    const url = `${this.baseURL}/api/documents/${portalId}/${objectType}/${objectId}`;
    console.log('📄 API: Making request to:', url);

    try {
      const response = await this.fetch(url, {
        method: 'GET'
      });

      console.log('📄 API: Response status:', response.status);
      console.log('📄 API: Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API: Error response:', errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: errorText };
        }
        throw new Error(errorData.error || 'Failed to fetch documents');
      }

      const data = await response.json();
      console.log('📄 API: Documents data:', data);
      return data;
    } catch (error) {
      console.error('❌ API: getDocuments error:', error);
      throw error;
    }
  }

  // Get access logs for documents (multi-tenant)
  async getAccessLogs(documentId = null) {
    console.log('📜 API: getAccessLogs called', { documentId });

    if (!this.fetch) {
      console.error('❌ API: HubSpot fetch not initialized for access logs');
      throw new Error('HubSpot fetch not initialized');
    }

    const portalId = this.context?.portal?.id;
    const teamId = 'default'; // For now, using default team

    if (!portalId) {
      throw new Error('Portal ID not available');
    }

    // Build URL with optional document_id filter
    let url = `${this.baseURL}/api/documents/${teamId}/${portalId}/access-logs`;
    if (documentId) {
      url += `?document_id=${documentId}`;
    }

    console.log('📜 API: Making access logs request to:', url);

    try {
      const response = await this.fetch(url, {
        method: 'GET'
      });

      console.log('📜 API: Access logs response status:', response.status);
      console.log('📜 API: Access logs response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API: Access logs error response:', errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: errorText };
        }
        throw new Error(errorData.error || 'Failed to fetch access logs');
      }

      const result = await response.json();
      console.log('📜 API: Access logs data:', result);
      return result;
    } catch (error) {
      console.error('❌ API: getAccessLogs error:', error);
      throw error;
    }
  }

  // Log document access
  async logAccess(documentId, userId, action, metadata = {}) {
    console.log('📝 API: logAccess called', { documentId, userId, action, metadata });

    if (!this.fetch) {
      console.error('❌ API: HubSpot fetch not initialized for log access');
      throw new Error('HubSpot fetch not initialized');
    }

    const url = `${this.baseURL}/api/log-access`;
    const payload = { documentId, userId, action, metadata };
    console.log('📝 API: Making log access request to:', url, 'with payload:', payload);

    try {
      const response = await this.fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log('📝 API: Log access response status:', response.status);
      console.log('📝 API: Log access response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API: Log access error response:', errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: errorText };
        }
        throw new Error(errorData.error || 'Failed to log access');
      }

      const result = await response.json();
      console.log('📝 API: Log access success:', result);
      return result;
    } catch (error) {
      console.error('❌ API: logAccess error:', error);
      throw error;
    }
  }

  // Get compliance statistics (multi-tenant)
  async getComplianceStats(objectType, objectId) {
    console.log('📊 API: getComplianceStats called', { objectType, objectId });

    if (!this.fetch) {
      console.error('❌ API: HubSpot fetch not initialized for compliance stats');
      throw new Error('HubSpot fetch not initialized');
    }

    const portalId = this.context?.portal?.id;
    const teamId = 'default'; // For now, using default team

    if (!portalId) {
      throw new Error('Portal ID not available');
    }

    const url = `${this.baseURL}/api/documents/${teamId}/${portalId}/compliance-stats`;
    console.log('📊 API: Making compliance stats request to:', url);

    try {
      const response = await this.fetch(url, {
        method: 'GET'
      });

      console.log('📊 API: Compliance stats response status:', response.status);
      console.log('📊 API: Compliance stats response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API: Compliance stats error response:', errorText);
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: errorText };
        }
        throw new Error(errorData.error || 'Failed to fetch compliance stats');
      }

      const result = await response.json();
      console.log('📊 API: Compliance stats data:', result);
      return result;
    } catch (error) {
      console.error('❌ API: getComplianceStats error:', error);
      throw error;
    }
  }

  // Health check
  async healthCheck() {
    console.log('🏥 API: healthCheck called');

    if (!this.fetch) {
      console.error('❌ API: HubSpot fetch not initialized for health check');
      return { status: 'unavailable', error: 'HubSpot fetch not initialized' };
    }

    const url = `${this.baseURL}/api/health`;
    console.log('🏥 API: Making health check request to:', url);

    try {
      const response = await this.fetch(url);
      console.log('🏥 API: Health check response status:', response.status);
      console.log('🏥 API: Health check response ok:', response.ok);

      const result = await response.json();
      console.log('🏥 API: Health check result:', result);
      return result;
    } catch (error) {
      console.error('❌ API: healthCheck error:', error);
      return { status: 'unavailable', error: error.message };
    }
  }
}

// Export class for instantiation with fetch method
export default AccessShieldAPI;