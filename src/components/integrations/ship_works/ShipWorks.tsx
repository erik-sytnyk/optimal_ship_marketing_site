import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

function ShipWorks() {
  const data = dataService.getIntegrationShipworks();

  return (
    <IntegrationContainer
      title={data.title}
      description={data.description}
      subtitle={data.subtitle}
      items={data.list}
    />
  );
}

export default ShipWorks;
