import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

function ShipStation() {
  const data = dataService.getIntegrationShipStation();

  return (
    <IntegrationContainer
      title={data.title}
      description={data.description}
      subtitle={data.subtitle}
      items={data.list}
    />
  );
}

export default ShipStation;
