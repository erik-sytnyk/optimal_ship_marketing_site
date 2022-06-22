import Image from 'next/image';

import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './BigCommerce.styled';

function BigCommerce() {
  const data = dataService.getIntegrationBigCommerce();

  const content = data.content;
  const contentExtra = data.contentExtra;

  const content1 = data.list[5].content;
  const content2 = data.list[6].content;

  const customItems = {
    [5]: <styled.caption>{content1.title}</styled.caption>,
    [6]: <styled.caption>{content2.title}</styled.caption>
  };

  return (
    <IntegrationContainer
      title={data.title}
      description={data.description}
      subtitle={data.subtitle}
      items={data.list}
      customItems={customItems}
      childrenPosition="top">
      <div>
        <styled.title>{content.title}</styled.title>
        <styled.text>{content.description}</styled.text>
        <ol>
          {content.list.map((item, index) => {
            return <styled.listItem key={index} dangerouslySetInnerHTML={{__html: item}} />;
          })}
        </ol>
      </div>

      <styled.contentExtra>
        <styled.extraTitle>{contentExtra.title}</styled.extraTitle>
        <Image
          src={contentExtra.image.url}
          alt={contentExtra.image.alt}
          width={contentExtra.image.width}
          height={contentExtra.image.height}
        />
        <styled.caption>{contentExtra.description}</styled.caption>
      </styled.contentExtra>
    </IntegrationContainer>
  );
}

export default BigCommerce;
