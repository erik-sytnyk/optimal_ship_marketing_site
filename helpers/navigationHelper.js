import config from '../config';

const navigationHelper = {
  getDHLTrackingUrl
};

function getDHLTrackingUrl(trackingNumber) {
  return `${config.dhlTrackingNumberUrl}?tracking-id=${trackingNumber}&submit=1`;
}

export default navigationHelper;
