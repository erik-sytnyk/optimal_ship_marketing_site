const dataService = {
  getIntelligentSupplyChainSolutions,
  getFreeDigitalTools,
  getSuccessNumbers,
  getCustomersFeedback
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

export default dataService;
