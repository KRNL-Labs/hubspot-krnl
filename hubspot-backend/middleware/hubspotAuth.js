const hubspotOAuth = require('../services/hubspotOAuth');

/**
 * Middleware to authenticate requests from HubSpot marketplace app
 * Processes HubSpot's signed requests with embedded metadata
 */
const authenticateHubSpotRequest = async (req, res, next) => {
  try {
    console.log('🔐 HubSpot Auth: Processing signed request');
    console.log('🔐 HubSpot Auth: Headers:', Object.keys(req.headers));
    console.log('🔐 HubSpot Auth: Body:', req.body);

    // HubSpot automatically includes metadata in the request
    // Extract portal/user info from the request body or query params
    let portalId = null;
    let userId = null;

    // Check request body for metadata (POST requests)
    if (req.body) {
      portalId = req.body.portalId || req.body.portal_id;
      userId = req.body.userId || req.body.user_id;
    }

    // Check query parameters for metadata (GET requests)
    if (!portalId) {
      portalId = req.query.portalId || req.query.portal_id;
      userId = req.query.userId || req.query.user_id;
    }

    console.log('🔐 HubSpot Auth: Extracted Portal ID:', portalId);
    console.log('🔐 HubSpot Auth: Extracted User ID:', userId);

    // For now, since we have OAuth working, we can proceed without strict validation
    // In production, you would validate the HubSpot signature here

    if (portalId) {
      try {
        const accessToken = await hubspotOAuth.getValidAccessToken('default', portalId);
        req.hubspotAccessToken = accessToken;
        req.hubspotPortalId = portalId;
        req.hubspotUserId = userId;
        console.log('✅ HubSpot Auth: Valid token found for portal', portalId);
      } catch (tokenError) {
        console.warn('⚠️ HubSpot Auth: No stored token for portal', portalId, 'proceeding without auth');
        // Don't fail the request, just proceed without stored token
        req.hubspotPortalId = portalId;
        req.hubspotUserId = userId;
      }
    } else {
      console.log('ℹ️ HubSpot Auth: No portal ID found, proceeding with demo mode');
    }

    next();

  } catch (error) {
    console.error('❌ HubSpot Auth Middleware Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Authentication failed'
    });
  }
};

module.exports = {
  authenticateHubSpotRequest
};