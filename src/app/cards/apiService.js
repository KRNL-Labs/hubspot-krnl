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

    const url = `${this.baseURL}/api/documents/${teamId}/${portalId}/${objectType}/${objectId}`;
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

  // Get access logs for a specific record
  async getAccessLogs(recordId = null) {
    console.log('📜 API: getAccessLogs called', {
      recordId,
      recordIdType: typeof recordId,
      baseURL: this.baseURL,
      contextPortalId: this.context?.portal?.id
    });

    if (!this.fetch) {
      console.error('❌ API: HubSpot fetch not initialized for access logs');
      throw new Error('HubSpot fetch not initialized');
    }

    const portalId = this.context?.portal?.id;
    const teamId = 'default'; // For now, using default team

    if (!portalId) {
      throw new Error('Portal ID not available');
    }

    // Build URL for access logs (original backend pattern)
    let url = `${this.baseURL}/api/documents/${teamId}/${portalId}/access-logs`;
    if (recordId) {
      url += `?record_id=${recordId}`;
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

}

// Export class for instantiation with fetch method
export default AccessShieldAPI;