import moment from 'moment';

/**
 * Format date for display
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';

  try {
    return moment(dateString).format('MMM DD, YYYY HH:mm');
  } catch (error) {
    return dateString;
  }
};

/**
 * Get badge variant based on blockchain status
 */
export const getBlockchainStatusVariant = (status) => {
  switch (status) {
    case 'Registered':
    case 'Logged to Blockchain':
    case 'COMPLETED_WITH_EVENT':
      return 'success';
    case 'Pending':
    case 'Processing':
      return 'warning';
    case 'Failed':
    case 'Blockchain Error':
    case 'Registration Failed':
      return 'error';
    default:
      return 'neutral';
  }
};

/**
 * Generate secure hash for document
 */
export const generateDocumentHash = async (fileContent) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(fileContent);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

/**
 * Validate file type
 */
export const isValidFileType = (file) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain',
    'image/jpeg',
    'image/png'
  ];

  return allowedTypes.includes(file.type);
};

/**
 * Format file size for display
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Generate random session ID
 */
export const generateSessionId = () => {
  return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
};

/**
 * Validate HubSpot object ID
 */
export const isValidObjectId = (id) => {
  return id && typeof id === 'string' && /^\d+$/.test(id);
};

/**
 * Create Etherscan URL for transaction hash
 */
export const createEtherscanUrl = (txHash, network = 'sepolia') => {
  if (!txHash) return null;

  const baseUrl = network === 'mainnet'
    ? 'https://etherscan.io/tx/'
    : `https://${network}.etherscan.io/tx/`;

  return baseUrl + txHash;
};

/**
 * Debounce function for search inputs
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

/**
 * Extract metadata from file
 */
export const extractFileMetadata = (file) => {
  return {
    name: file.name,
    size: file.size,
    type: file.type,
    lastModified: file.lastModified,
    lastModifiedDate: file.lastModifiedDate
  };
};

/**
 * Create download link for file
 */
export const createDownloadLink = (blob, filename) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
};

/**
 * Parse error message from response
 */
export const parseErrorMessage = (error) => {
  if (typeof error === 'string') return error;
  if (error.message) return error.message;
  if (error.response?.data?.message) return error.response.data.message;
  if (error.response?.statusText) return error.response.statusText;
  return 'An unexpected error occurred';
};