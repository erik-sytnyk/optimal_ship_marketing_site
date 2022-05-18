const dataService = {
  getFreeDigitalTools,
  getSuccessNumbers,
  getHowItWorks,
  getIntelligentSupplyChainSolutions,
  getCustomersFeedback,
  getServices,
  getOptimalClients,
  getReadyToShip,
  getOptimalShipStory,
  getOurPrinciples,
  getLeadershipTeam,
  getCustomersStories,
  getShippingExperience,
  getPreparationTools,
  getServicesList,
  getPricingIntro,
  getPricingOffer,
  getPartners,
  getFAQ,
  getTermsOfServices,
  getPrivacyPolicy
};

// common

function getFreeDigitalTools() {
  const data = require('../../data/pages/digitalTools.json');
  return data;
}

function getSuccessNumbers() {
  const data = require('../../data/pages/successNumbers.json');
  return data;
}

function getHowItWorks() {
  const data = require('../../data/pages/howItWorks.json');
  return data;
}

// home page

function getIntelligentSupplyChainSolutions() {
  const data = require('../../data/pages/home/intelligentSupplyChainSolutions.json');
  return data;
}

function getCustomersFeedback() {
  const data = require('../../data/pages/home/customersFeedback.json');
  return data;
}

function getServices() {
  const data = require('../../data/pages/home/services.json');
  return data;
}

function getOptimalClients() {
  const data = require('../../data/pages/home/optimalClients.json');
  return data;
}

function getReadyToShip() {
  const data = require('../../data/pages/home/readyToShip.json');
  return data;
}

// about page

function getOptimalShipStory() {
  const data = require('../../data/pages/about/optimalShipStory.json');
  return data;
}

function getOurPrinciples() {
  const data = require('../../data/pages/about/ourPrinciples.json');
  return data;
}

function getLeadershipTeam() {
  const data = require('../../data/pages/about/leadershipTeam.json');
  return data;
}

function getCustomersStories() {
  const data = require('../../data/pages/about/customersStories.json');
  return data;
}

// services page

function getShippingExperience() {
  const data = require('../../data/pages/services/shippingExperience.json');
  return data;
}

function getPreparationTools() {
  const data = require('../../data/pages/services/preparationTools.json');
  return data;
}

function getServicesList() {
  const data = require('../../data/pages/services/servicesList.json');
  return data;
}

// pricing page

function getPricingIntro() {
  const data = require('../../data/pages/pricing/intro.json');
  return data;
}

function getPricingOffer() {
  const data = require('../../data/pages/pricing/offer.json');
  return data;
}

function getPartners() {
  const data = require('../../data/pages/pricing/partners.json');
  return data;
}

function getFAQ() {
  const data = require('../../data/pages/pricing/faq.json');
  return data;
}

// terms of services page

function getTermsOfServices() {
  const data = require('../../data/pages/terms_of_services/termsOfServices.json');
  return data;
}

// privacy policy page

function getPrivacyPolicy() {
  const data = require('../../data/pages/privacy_policy/privacyPolicy.json');
  return data;
}

export default dataService;
