const express = require('express');
const router = express.Router();
const hubspotOAuth = require('../services/hubspotOAuth');
const { v4: uuidv4 } = require('uuid');

// Initiate OAuth flow
router.get('/hubspot/authorize', async (req, res) => {
  try {
    const { team_name, return_url } = req.query;

    // Generate state parameter to prevent CSRF attacks
    const state = uuidv4();

    // Store state and metadata in session
    req.session.oauthState = state;
    req.session.teamName = team_name;
    req.session.returnUrl = return_url || '/';

    // Generate authorization URL
    const authUrl = hubspotOAuth.generateAuthUrl(state);

    // For API calls, return the URL
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
      return res.json({
        success: true,
        authUrl,
        state
      });
    }

    // For browser requests, redirect
    res.redirect(authUrl);
  } catch (error) {
    console.error('OAuth authorization error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to initialize OAuth flow'
    });
  }
});

// Handle OAuth callback
router.get('/hubspot/callback', async (req, res) => {
  try {
    const { code, state, error } = req.query;

    // Handle OAuth error
    if (error) {
      console.error('OAuth error:', error);
      return res.status(400).json({
        success: false,
        error: `OAuth error: ${error}`
      });
    }

    // Validate state parameter (if session exists)
    if (req.session.oauthState && state !== req.session.oauthState) {
      console.warn('State parameter mismatch:', { expected: req.session.oauthState, received: state });
      return res.status(400).json({
        success: false,
        error: 'Invalid state parameter'
      });
    }

    // If no session state exists, continue (HubSpot may initiate directly)

    // Exchange code for tokens
    const tokenData = await hubspotOAuth.exchangeCodeForTokens(code);

    // Get account information
    const accountInfo = await hubspotOAuth.getAccountInfo(tokenData.access_token);

    // Store tokens with team association
    const teamName = req.session.teamName || accountInfo.hub_domain;
    const storeResult = await hubspotOAuth.storeTokens(tokenData, accountInfo, teamName);

    // Clear session data
    delete req.session.oauthState;
    delete req.session.teamName;

    // Redirect back to HubSpot after successful OAuth
    const returnUrl = req.session.returnUrl || '/';
    delete req.session.returnUrl;

    // Simple success response - HubSpot handles the rest
    res.send('Success! You can close this window.');

  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(500).json({
      success: false,
      error: 'OAuth authentication failed'
    });
  }
});

// Refresh token endpoint
router.post('/hubspot/refresh', async (req, res) => {
  try {
    const { team_id, hubspot_account_id } = req.body;

    if (!team_id || !hubspot_account_id) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters'
      });
    }

    // Get fresh access token (this handles refresh automatically)
    const accessToken = await hubspotOAuth.getValidAccessToken(team_id, hubspot_account_id);

    res.json({
      success: true,
      accessToken: accessToken.substring(0, 10) + '...' // Don't expose full token
    });

  } catch (error) {
    console.error('Token refresh error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to refresh token'
    });
  }
});

// Revoke token endpoint
router.post('/hubspot/revoke', async (req, res) => {
  try {
    const { team_id, hubspot_account_id } = req.body;

    if (!team_id || !hubspot_account_id) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters'
      });
    }

    await hubspotOAuth.revokeTokens(team_id, hubspot_account_id);

    res.json({
      success: true,
      message: 'Token revoked successfully'
    });

  } catch (error) {
    console.error('Token revocation error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to revoke token'
    });
  }
});

// Get OAuth status
router.get('/hubspot/status/:teamId/:hubspotAccountId', async (req, res) => {
  try {
    const { teamId, hubspotAccountId } = req.params;

    // Try to get a valid access token
    const accessToken = await hubspotOAuth.getValidAccessToken(teamId, hubspotAccountId);

    res.json({
      success: true,
      authenticated: !!accessToken,
      message: 'OAuth connection active'
    });

  } catch (error) {
    res.json({
      success: false,
      authenticated: false,
      message: 'OAuth connection not found or expired'
    });
  }
});

module.exports = router;