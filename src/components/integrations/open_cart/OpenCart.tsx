import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './OpenCart.styled';

function OpenCart() {
  const data = dataService.getIntegrationOpenCart();

  const customItems = {
    6: (
      <ol type="a">
        {data.list[6].content.orderedList.map((item, index) => {
          return <styled.listItem key={index}>{item}</styled.listItem>;
        })}
      </ol>
    )
  };

  return (
    <IntegrationContainer
      title={data.title}
      description={data.description}
      button={data.button}
      subtitle={data.subtitle}
      items={data.list}
      customItems={customItems}
    />
  );
}

export default OpenCart;
