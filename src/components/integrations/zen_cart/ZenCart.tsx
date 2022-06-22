import Image from 'next/image';

import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './ZenCart.styled';

function ZenCart() {
  const data = dataService.getIntegrationZenCart();

  const index = 3;
  const content = data.list[index].content;
  const contentImage = content.image;

  const customItems = {
    [index]: (
      <div>
        <styled.unorderedList>
          {content.unorderedList.map((item, index) => {
            return <styled.listItem key={index} dangerouslySetInnerHTML={{__html: item}} />;
          })}
        </styled.unorderedList>

        <styled.title dangerouslySetInnerHTML={{__html: content.title}} />
        <Image src={contentImage.url} alt={contentImage.alt} width={contentImage.width} height={contentImage.height} />
      </div>
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

export default ZenCart;
