const baseUrl = 'https://prep.optimalship.com';

const config = {
  baseUrl,
  dhlTrackingNumberUrl: 'https://www.dhl.com/us-en/home/tracking/tracking-express.html',
  oldWebSiteUrl: 'https://www.optimalship.com/',
  onlineTools: {
    bill: 'https://portal.optimalship.com/dashboard',
    createAccount: `${baseUrl}/sign-up`,
    home: baseUrl,
    pickup: `${baseUrl}/schedule-pickup`,
    quote: `${baseUrl}/get-quote`,
    shipment: `${baseUrl}/prepare-shipment`
  },
  socialMedia: {
    facebook: 'https://www.facebook.com/OptimalShipRexburg/',
    instagram: 'https://www.instagram.com/optimalshipteam/',
    linkedIn: 'https://www.linkedin.com/company/optimal-logistics---dallas'
  },
  heapId: {
    qa: '2466015289',
    production: '2751061922'
  },
  googleAnalytics: 'UA-56168409-2'
};

export default config;
