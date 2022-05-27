import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './Magento2.styled';

function Magento2() {
  const data = dataService.getIntegrationMagento2();

  function getExtraItemByIndex(index) {
    return data.list[index].content.title;
  }

  const customItems = {
    0: <styled.title>{getExtraItemByIndex(0)}</styled.title>,
    2: <styled.title dangerouslySetInnerHTML={{__html: getExtraItemByIndex(2)}} />,
    5: <styled.title>{getExtraItemByIndex(5)}</styled.title>
  };

  return (
    <IntegrationContainer
      title={data.title}
      description={data.description}
      button={data.button}
      headerImage={data.image}
      subtitle={data.subtitle}
      items={data.list}
      customItems={customItems}
    />
  );
}

export default Magento2;
