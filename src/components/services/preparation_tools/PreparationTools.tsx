import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function PreparationTools() {
  const data = dataService.getPreparationTools();

  const {comparisonTableImage, demoImage} = data;

  return (
    <styled.wrapper>
      <styled.contentWrapper>
        <styled.content>
          <styled.title>{data.title}</styled.title>
          <styled.subtitle>{data.subtitle}</styled.subtitle>
          <styled.description>{data.description}</styled.description>
          <styled.button>{data.button}</styled.button>
        </styled.content>

        <Image
          src={comparisonTableImage.url}
          alt={comparisonTableImage.alt}
          width={comparisonTableImage.width}
          height={comparisonTableImage.height}
        />
      </styled.contentWrapper>

      <styled.demoImage>
        <Image src={demoImage.url} alt={demoImage.alt} width={demoImage.width} height={demoImage.height} />
      </styled.demoImage>
    </styled.wrapper>
  );
}

export default PreparationTools;
