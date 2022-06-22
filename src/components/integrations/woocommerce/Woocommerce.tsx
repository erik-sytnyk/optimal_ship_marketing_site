import Image from 'next/image';

import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './Woocommerce.styled';

function Woocommerce() {
  const data = dataService.getIntegrationWoocommerce();

  const index = 5;
  const content = data.list[index].content;
  const contentImage = content.image;

  const customItems = {
    [index]: (
      <div>
        <styled.title>{content.title}</styled.title>

        <Image src={contentImage.url} alt={contentImage.alt} width={contentImage.width} height={contentImage.height} />

        <ul>
          {content.unorderedList.map((item, index) => {
            return <styled.listItem key={index} dangerouslySetInnerHTML={{__html: item}} />;
          })}
        </ul>
      </div>
    )
  };

  return (
    <IntegrationContainer title={data.title} description={data.description} button={data.button} subtitle={data.subtitle} items={data.list} customItems={customItems} />
  );
}

export default Woocommerce;
