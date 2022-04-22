const dataService = {
  getIntelligentSupplyChainSolutions,
  getFreeDigitalTools,
  getSuccessNumbers,
  getCustomersFeedback,
  getHowItWorks,
  getServices,
  getOptimalClients,
  getReadyToShip
};

function getIntelligentSupplyChainSolutions() {
  const data = require('../data/pages/home/intelligentSupplyChainSolutions.json');
  return data;
}

function getFreeDigitalTools() {
  const data = require('../data/pages/home/digitalTools.json');
  return data;
}

function getSuccessNumbers() {
  const data = require('../data/pages/home/successNumbers.json');
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

export default dataService;
