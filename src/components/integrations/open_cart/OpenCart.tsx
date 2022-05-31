import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './OpenCart.styled';

function ShipStation() {
  const data = dataService.getIntegrationOpenCart();

  function downloadFile() {
    window.open('https://www.optimalship.com/helps/opencart/optimalship.ocmod.zip', '_blank');
  }

  const customItems = {
    0: <styled.button onClick={downloadFile}>Download OpenChart File</styled.button>,
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
      customItems={customItems}
    />
  );
}

export default ShipStation;
