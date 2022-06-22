import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

function ShippingEasy() {
  const data = dataService.getIntegrationShippingEasy();

  return (
    <IntegrationContainer title={data.title} description={data.description} subtitle={data.subtitle} items={data.list}>
    </IntegrationContainer>
  );
}

export default ShippingEasy;
