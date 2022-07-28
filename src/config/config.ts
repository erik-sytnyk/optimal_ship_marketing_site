const baseUrl = 'https://prep.optimalship.com';

let env: string = process.env.NODE_ENV;

if (typeof window !== 'undefined') {
  const hostname = window.location.hostname;

  if (hostname.includes('optimalship-marketing-qa')) {
    env = 'qa';
  }
}

const config = {
  baseUrl,
  dhlTrackingNumberUrl: 'https://www.dhl.com/us-en/home/tracking/tracking-express.html',
  oldWebSiteUrl: 'https://www.optimalship.com/?classic',
  onlineTools: {
    bill: 'https://portal.optimalship.com/dashboard',
    createAccount: `${baseUrl}/sign-up`,
    home: baseUrl,
    pickup: `${baseUrl}/schedule-pickup`,
    quote: `${baseUrl}/get-quote`,
    shipment: `${baseUrl}/prepare-shipment`
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/OptimalShip.DHLWholesale',
    instagram: 'https://www.instagram.com/optimalshipteam/',
    linkedIn: 'https://www.linkedin.com/company/optimal-logistics---dallas',
    twitter: 'https://twitter.com/OptimalShip'
  },
  heapId: getHeapId(),
  googleAnalyticsId: getGoogleId()
};

function getHeapId() {
  if (env === 'qa') return '2466015289';

  if (env === 'production') return '2751061922';

  return null;
}

function getGoogleId() {
  if (env === 'qa') return null;

  if (env === 'production') return 'UA-56168409-1';

  return null;
}

export default config;
