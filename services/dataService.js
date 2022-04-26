const dataService = {
  getFreeDigitalTools,
  getSuccessNumbers,
  getIntelligentSupplyChainSolutions,
  getCustomersFeedback,
  getHowItWorks,
  getServices,
  getOptimalClients,
  getReadyToShip,
  getOptimalShipStory,
  getOurPrinciples,
  getLeadershipTeam
};

// common

function getFreeDigitalTools() {
  const data = require('../data/pages/digitalTools.json');
  return data;
}

function getSuccessNumbers() {
  const data = require('../data/pages/successNumbers.json');
  return data;
}

// home page

function getIntelligentSupplyChainSolutions() {
  const data = require('../data/pages/home/intelligentSupplyChainSolutions.json');
  return data;
}

function getCustomersFeedback() {
  const data = require('../data/pages/home/customersFeedback.json');
  return data;
}

function getHowItWorks() {
  const data = require('../data/pages/home/howItWorks.json');
  return data;
}

function getServices() {
  const data = require('../data/pages/home/services.json');
  return data;
}

function getOptimalClients() {
  const data = require('../data/pages/home/optimalClients.json');
  return data;
}

function getReadyToShip() {
  const data = require('../data/pages/home/readyToShip.json');
  return data;
}

// about page

function getOptimalShipStory() {
  const data = require('../data/pages/about/optimalShipStory.json');
  return data;
}

function getOurPrinciples() {
  const data = require('../data/pages/about/ourPrinciples.json');
  return data;
}

function getLeadershipTeam() {
  const data = require('../data/pages/about/leadershipTeam.json');
  return data;
}

export default dataService;
