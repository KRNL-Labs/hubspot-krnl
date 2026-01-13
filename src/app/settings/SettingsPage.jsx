import React, { useState, useEffect } from 'react';
import {
  hubspot,
  Card,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Alert,
  LoadingSpinner,
  Select,
} from '@hubspot/ui-extensions';

hubspot.extend(({ context, actions, fetch }) => {
  return (
    <AccessShieldSettings
      context={context}
      actions={actions}
      fetch={fetch}
    />
  );
});

const AccessShieldSettings = ({ context, actions, fetch }) => {
  const [settings, setSettings] = useState({
    blockchainNetwork: 'sepolia',
    autoWatermarking: 'enabled',
    retentionDays: 365,
    complianceMode: 'standard'
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setLoading(true);
    try {
      // Load settings from your backend
      const response = await fetch('https://051892e58926.ngrok-free.app/api/settings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setSettings(data.settings || settings);
      }
    } catch (err) {
      console.error('Error loading settings:', err);
      setError('Failed to load settings: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const saveSettings = async () => {
    setSaving(true);
    setError(null);
    try {
      const response = await fetch('https://051892e58926.ngrok-free.app/api/settings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          settings: settings,
          portalId: context.portal?.id
        })
      });

      if (response.ok) {
        setSuccess(true);
        actions.addAlert({
          type: 'success',
          message: 'Settings saved successfully!'
        });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error('Failed to save settings');
      }
    } catch (err) {
      console.error('Error saving settings:', err);
      setError('Failed to save settings: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field, value) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (loading) {
    return (
      <Flex justify="center" align="center" style={{ minHeight: '200px' }}>
        <LoadingSpinner size="large" />
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap="large">
      <Card>
        <Flex direction="column" gap="medium">
          <Heading>AccessShield Settings</Heading>
          <Text>Configure your AccessShield integration settings.</Text>

          {error && (
            <Alert variant="error" title="Error">
              {error}
            </Alert>
          )}

          {success && (
            <Alert variant="success" title="Success">
              Settings saved successfully!
            </Alert>
          )}

          {/* Blockchain Network */}
          <Flex direction="column" gap="small">
            <Text weight="bold">Blockchain Network</Text>
            <Select
              value={settings.blockchainNetwork}
              onChange={(value) => handleInputChange('blockchainNetwork', value)}
              options={[
                { label: 'Sepolia (Testnet)', value: 'sepolia' },
                { label: 'Ethereum Mainnet', value: 'mainnet' },
                { label: 'Polygon', value: 'polygon' }
              ]}
            />
            <Text variant="microcopy">
              Network used for blockchain registration (sepolia for testing, mainnet for production)
            </Text>
          </Flex>

          {/* Auto Watermarking */}
          <Flex direction="column" gap="small">
            <Text weight="bold">Auto Watermarking</Text>
            <Select
              value={settings.autoWatermarking}
              onChange={(value) => handleInputChange('autoWatermarking', value)}
              options={[
                { label: 'Enabled', value: 'enabled' },
                { label: 'Disabled', value: 'disabled' }
              ]}
            />
            <Text variant="microcopy">
              Automatically apply identity-bound watermarks to documents
            </Text>
          </Flex>

          {/* Retention Days */}
          <Flex direction="column" gap="small">
            <Text weight="bold">Document Retention (Days)</Text>
            <Input
              type="number"
              value={settings.retentionDays}
              onChange={(value) => handleInputChange('retentionDays', parseInt(value))}
              placeholder="365"
            />
            <Text variant="microcopy">
              Number of days to retain document access logs
            </Text>
          </Flex>

          {/* Compliance Mode */}
          <Flex direction="column" gap="small">
            <Text weight="bold">Compliance Mode</Text>
            <Select
              value={settings.complianceMode}
              onChange={(value) => handleInputChange('complianceMode', value)}
              options={[
                { label: 'Standard', value: 'standard' },
                { label: 'Strict', value: 'strict' },
                { label: 'Custom', value: 'custom' }
              ]}
            />
            <Text variant="microcopy">
              Compliance level: standard, strict, or custom
            </Text>
          </Flex>

          <Flex justify="end" gap="medium">
            <Button
              variant="secondary"
              onClick={loadSettings}
              disabled={saving}
            >
              Reset
            </Button>
            <Button
              variant="primary"
              onClick={saveSettings}
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save Settings'}
            </Button>
          </Flex>
        </Flex>
      </Card>

      {/* API Status */}
      <Card>
        <Flex direction="column" gap="medium">
          <Heading level={2}>API Connection Status</Heading>
          <Text>Backend API: https://051892e58926.ngrok-free.app</Text>
          <Text variant="microcopy">
            This is your current backend endpoint for AccessShield operations.
          </Text>
        </Flex>
      </Card>
    </Flex>
  );
};

export default AccessShieldSettings;