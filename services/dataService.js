const dataService = {
  getIntelligentSupplyChainSolutions
};

function getIntelligentSupplyChainSolutions() {
  const data = require('../data/pages/home/intelligentSupplyChainSolutions.json');
  return data;
}

export default dataService;
