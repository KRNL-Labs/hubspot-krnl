const { Client } = require('@hubspot/api-client');
const axios = require('axios');
const { query, transaction } = require('../database/connection');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto-js');

class HubSpotOAuthService {
  constructor() {
    this.clientId = process.env.HUBSPOT_CLIENT_ID;
    this.clientSecret = process.env.HUBSPOT_CLIENT_SECRET;
    this.redirectUri = process.env.HUBSPOT_REDIRECT_URI;
    this.scopes = [
      'oauth',
      'crm.objects.contacts.read',
      'crm.objects.contacts.write',
      'crm.objects.companies.read',
      'crm.objects.companies.write',
      'crm.objects.deals.read',
      'crm.objects.deals.write',
      'files'
    ];

    // Validate required environment variables
    if (!this.clientId || !this.clientSecret || !this.redirectUri) {
      console.error('Missing HubSpot OAuth configuration:');
      console.error('- HUBSPOT_CLIENT_ID:', this.clientId ? 'SET' : 'MISSING');
      console.error('- HUBSPOT_CLIENT_SECRET:', this.clientSecret ? 'SET' : 'MISSING');
      console.error('- HUBSPOT_REDIRECT_URI:', this.redirectUri || 'MISSING');
      throw new Error('HubSpot OAuth configuration incomplete');
    }

    console.log('HubSpot OAuth Service initialized with:');
    console.log('- Client ID:', this.clientId);
    console.log('- Redirect URI:', this.redirectUri);
    console.log('- Scopes:', this.scopes.join(', '));
  }

  // Generate authorization URL for OAuth flow
  generateAuthUrl(state = null) {
    if (!this.clientId || !this.redirectUri) {
      throw new Error('HubSpot OAuth not properly configured');
    }

    const baseUrl = 'https://app.hubspot.com/oauth/authorize';
    const params = new URLSearchParams({
      client_id: this.clientId,
      scope: this.scopes.join(' '),
      redirect_uri: this.redirectUri
    });

    if (state) {
      params.append('state', state);
    }

    return `${baseUrl}?${params.toString()}`;
  }

  // Exchange authorization code for access tokens
  async exchangeCodeForTokens(authCode) {
    try {
      console.log('Exchanging code for tokens with:', {
        grant_type: 'authorization_code',
        client_id: this.clientId,
        redirect_uri: this.redirectUri,
        code: authCode ? `${authCode.substring(0, 10)}...` : 'NO_CODE'
      });

      // Create URL-encoded form data
      const formData = new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        redirect_uri: this.redirectUri,
        code: authCode
      });

      const response = await axios.post('https://api.hubapi.com/oauth/v1/token', formData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      console.log('Token exchange successful');
      return response.data;
    } catch (error) {
      console.error('Token exchange error:', error.response?.data || error.message);
      console.error('Request config:', {
        url: 'https://api.hubapi.com/oauth/v1/token',
        method: 'POST',
        headers: error.config?.headers,
        data: error.config?.data
      });
      throw new Error('Failed to exchange code for tokens');
    }
  }

  // Refresh access token using refresh token
  async refreshAccessToken(refreshToken) {
    try {
      // Create URL-encoded form data for refresh token request
      const formData = new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        refresh_token: refreshToken
      });

      const response = await axios.post('https://api.hubapi.com/oauth/v1/token', formData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      console.log('Token refresh successful');
      return response.data;
    } catch (error) {
      console.error('Token refresh error:', error.response?.data || error.message);
      throw new Error('Failed to refresh access token');
    }
  }

  // Get account information using access token
  async getAccountInfo(accessToken) {
    try {
      // Try the official API client first
      const hubspotClient = new Client({ accessToken });
      let accountInfo;

      try {
        accountInfo = await hubspotClient.oauth.accessTokensApi.get(accessToken);
        console.log('OAuth API response:', JSON.stringify(accountInfo, null, 2));
      } catch (oauthError) {
        console.warn('OAuth API failed, trying alternative approach:', oauthError.message);

        // Fallback: Get account info from settings or contacts API
        try {
          const response = await axios.get('https://api.hubapi.com/integrations/v1/me', {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          });
          accountInfo = response.data;
          console.log('Integration API response:', JSON.stringify(accountInfo, null, 2));
        } catch (integrationError) {
          console.warn('Integration API failed, using token introspection fallback');
          // Use token introspection as last resort
          accountInfo = {
            hub_id: Date.now(), // Temporary ID
            hub_domain: 'unknown-domain'
          };
        }
      }

      // Extract the actual data from the response
      const data = accountInfo.body || accountInfo.data || accountInfo;

      // Handle different response structures
      const hubId = data.hub_id || data.hubId || data.portalId || data.accountId;
      const hubDomain = data.hub_domain || data.hubDomain || data.domain || `account-${hubId}`;

      if (!hubId) {
        console.error('No hub_id found in account info:', data);
        // Generate a unique ID based on access token hash
        const fallbackId = crypto.SHA256(accessToken).toString().substring(0, 10);
        return {
          hub_id: fallbackId,
          hub_domain: `fallback-${fallbackId}`
        };
      }

      return {
        hub_id: hubId,
        hub_domain: hubDomain,
        ...data
      };
    } catch (error) {
      console.error('Account info error:', error);
      throw new Error('Failed to get account information');
    }
  }

  // Store OAuth tokens in database with team association
  async storeTokens(tokenData, accountInfo, teamName = null) {
    console.log('Storing tokens with data:', {
      tokenData: { ...tokenData, access_token: '[REDACTED]', refresh_token: '[REDACTED]' },
      accountInfo,
      teamName
    });

    return await transaction(async (client) => {
      try {
        // Create or find team
        let teamId;
        if (teamName) {
          const teamSlug = teamName.toLowerCase().replace(/[^a-z0-9]/g, '-');
          const teamResult = await client.query(
            `INSERT INTO teams (name, slug) VALUES ($1, $2)
             ON CONFLICT (slug) DO UPDATE SET name = $1
             RETURNING id`,
            [teamName, teamSlug]
          );
          teamId = teamResult.rows[0].id;
        } else {
          // Auto-generate team from account info
          const teamName = accountInfo.hub_domain || `Account-${accountInfo.hub_id}`;
          const teamSlug = `hubspot-${accountInfo.hub_id}`;

          const teamResult = await client.query(
            `INSERT INTO teams (name, slug) VALUES ($1, $2)
             ON CONFLICT (slug) DO UPDATE SET name = $1
             RETURNING id`,
            [teamName, teamSlug]
          );
          teamId = teamResult.rows[0].id;
        }

        // Store HubSpot account info
        const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));

        const accountResult = await client.query(
          `INSERT INTO hubspot_accounts
           (team_id, hubspot_account_id, account_name, domain, access_token, refresh_token, token_expires_at, scopes)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
           ON CONFLICT (hubspot_account_id)
           DO UPDATE SET
             access_token = $5,
             refresh_token = $6,
             token_expires_at = $7,
             scopes = $8,
             updated_at = NOW()
           RETURNING id`,
          [
            teamId,
            accountInfo.hub_id,
            accountInfo.hub_domain,
            accountInfo.hub_domain,
            tokenData.access_token,
            tokenData.refresh_token,
            expiresAt,
            tokenData.scope ? tokenData.scope.split(' ') : this.scopes
          ]
        );

        // Create app installation record
        await client.query(
          `INSERT INTO app_installations (team_id, hubspot_account_id, installation_id, install_source)
           VALUES ($1, $2, $3, $4)
           ON CONFLICT (hubspot_account_id) DO NOTHING`,
          [teamId, accountInfo.hub_id, uuidv4(), 'oauth']
        );

        return {
          teamId,
          accountId: accountResult.rows[0].id,
          hubspotAccountId: accountInfo.hub_id
        };
      } catch (error) {
        console.error('Token storage error:', error);
        throw error;
      }
    });
  }

  // Get valid access token for a team (refresh if needed)
  async getValidAccessToken(teamId, hubspotAccountId) {
    try {
      const result = await query(
        `SELECT access_token, refresh_token, token_expires_at
         FROM hubspot_accounts
         WHERE team_id = $1 AND hubspot_account_id = $2 AND is_active = true`,
        [teamId, hubspotAccountId]
      );

      if (result.rows.length === 0) {
        throw new Error('No valid HubSpot account found');
      }

      const { access_token, refresh_token, token_expires_at } = result.rows[0];

      // Check if token is expired (with 5-minute buffer)
      const expirationTime = new Date(token_expires_at);
      const bufferTime = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

      if (expirationTime <= bufferTime) {
        // Token is expired, refresh it
        console.log('Token expired, refreshing...');
        const newTokenData = await this.refreshAccessToken(refresh_token);

        // Update tokens in database
        const newExpiresAt = new Date(Date.now() + (newTokenData.expires_in * 1000));
        await query(
          `UPDATE hubspot_accounts
           SET access_token = $1, token_expires_at = $2, updated_at = NOW()
           WHERE team_id = $3 AND hubspot_account_id = $4`,
          [newTokenData.access_token, newExpiresAt, teamId, hubspotAccountId]
        );

        return newTokenData.access_token;
      }

      return access_token;
    } catch (error) {
      console.error('Error getting valid access token:', error);
      throw error;
    }
  }

  // Create HubSpot API client for a specific team
  async createClientForTeam(teamId, hubspotAccountId) {
    const accessToken = await this.getValidAccessToken(teamId, hubspotAccountId);
    return new Client({ accessToken });
  }

  // Revoke tokens and deactivate account
  async revokeTokens(teamId, hubspotAccountId) {
    try {
      const result = await query(
        `SELECT refresh_token FROM hubspot_accounts
         WHERE team_id = $1 AND hubspot_account_id = $2`,
        [teamId, hubspotAccountId]
      );

      if (result.rows.length === 0) {
        throw new Error('Account not found');
      }

      const { refresh_token } = result.rows[0];

      // Revoke the token with HubSpot
      try {
        await axios.post('https://api.hubapi.com/oauth/v1/refresh-tokens/' + refresh_token, {}, {
          method: 'DELETE'
        });
      } catch (error) {
        console.warn('Failed to revoke token with HubSpot:', error.message);
      }

      // Deactivate account in database
      await query(
        `UPDATE hubspot_accounts SET is_active = false WHERE team_id = $1 AND hubspot_account_id = $2`,
        [teamId, hubspotAccountId]
      );

      return true;
    } catch (error) {
      console.error('Token revocation error:', error);
      throw error;
    }
  }
}

module.exports = new HubSpotOAuthService();