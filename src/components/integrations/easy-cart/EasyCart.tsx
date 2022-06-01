import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

function EasyCart() {
  const data = dataService.getIntegrationEasyCart();

  return (
    <IntegrationContainer
      title={data.title}
      description={data.description}
      subtitle={data.subtitle}
      items={data.list}
    />
  );
}

export default EasyCart;
