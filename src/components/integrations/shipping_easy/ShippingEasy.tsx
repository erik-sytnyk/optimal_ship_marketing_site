import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './ShippingEasy.styled';

function ShippingEasy() {
  const data = dataService.getIntegrationShippingEasy();

  return (
    <IntegrationContainer title={data.title} description={data.description} subtitle={data.subtitle} items={data.list}>
      <styled.context>{data.context}</styled.context>
    </IntegrationContainer>
  );
}

export default ShippingEasy;
