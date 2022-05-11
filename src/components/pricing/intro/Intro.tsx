import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function Intro() {
  const data = dataService.getPricingIntro();

  const {quoteImage, backgroundImage} = data;

  return (
    <styled.wrapper>
      <styled.content>
        <styled.title>{data.title}</styled.title>
        <styled.subtitle>{data.subtitle}</styled.subtitle>
        <styled.description>{data.description}</styled.description>
      </styled.content>

      <styled.imageBlock>
        <styled.quoteImageWrapper>
          <Image src={quoteImage.url} alt={quoteImage.alt} width={quoteImage.width} height={quoteImage.height} />
        </styled.quoteImageWrapper>
        <styled.backgroundImageWrapper>
          <Image
            src={backgroundImage.url}
            alt={backgroundImage.alt}
            width={backgroundImage.width}
            height={backgroundImage.height}
          />
        </styled.backgroundImageWrapper>
      </styled.imageBlock>
    </styled.wrapper>
  );
}

export default Intro;
