import Image from 'next/image';

import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './Magento.styled';

function Magento() {
  const data = dataService.getIntegrationMagento();

  const index = 9;
  const content = data.installList[index].content;
  const contentImage = content.image;

  const customItems = {
    [index]: (
      <div>
        <ul>
          {content.unorderedList.map((item, index) => {
            return <styled.listItem key={index} dangerouslySetInnerHTML={{__html: item}} />;
          })}
        </ul>

        <Image src={contentImage.url} alt={contentImage.alt} width={contentImage.width} height={contentImage.height} />
      </div>
    )
  };

  return (
    <IntegrationContainer
      title={data.title}
      description={data.description}
      subtitle={data.subtitleToInstall}
      items={data.installList}
      customItems={customItems}>
      <styled.subtitle>{data.subtitleToUninstall}</styled.subtitle>

      {data.uninstallList.map((item, index) => {
        const image = item.image;

        return (
          <div key={index}>
            <styled.description>{item.title}</styled.description>
            {image && <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />}
          </div>
        );
      })}
    </IntegrationContainer>
  );
}

export default Magento;
