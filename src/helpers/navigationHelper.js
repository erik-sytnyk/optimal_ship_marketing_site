import config from '../config';

export default {
  getDHLTrackingUrl
};

function getDHLTrackingUrl(trackingNumber) {
  return `${config.dhlTrackingNumberUrl}?tracking-id=${trackingNumber}&submit=1`;
}
