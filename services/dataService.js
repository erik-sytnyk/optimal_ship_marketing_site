const dataService = {
  getIntelligentSupplyChainSolutions,
  getFreeDigitalTools
};

function getIntelligentSupplyChainSolutions() {
  const data = require('../data/pages/home/intelligentSupplyChainSolutions.json');
  return data;
}

function getFreeDigitalTools() {
  const data = require('../data/pages/home/digitalTools.json');
  return data;
}

export default dataService;
