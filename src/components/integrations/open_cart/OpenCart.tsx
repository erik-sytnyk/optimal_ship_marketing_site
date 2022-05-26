import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './OpenCart.styled';

function ShipStation() {
  const data = dataService.getIntegrationOpenCart();

  const extraItems = {
    0: <styled.button>Download OpenChart File</styled.button>,
    7: (
      <ol type="a">
        {data.list[7].content.orderedList.map((item, index) => {
          return <styled.listItem key={index}>{item}</styled.listItem>;
        })}
      </ol>
    )
  };

  return (
    <IntegrationContainer
      title={data.title}
      description={data.description}
      subtitle={data.subtitle}
      items={data.list}
      extraItems={extraItems}
    />
  );
}

export default ShipStation;
