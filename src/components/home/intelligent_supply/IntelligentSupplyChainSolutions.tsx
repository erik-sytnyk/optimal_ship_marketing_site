import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function IntelligentSupplyChainSolutions() {
  const data = dataService.getIntelligentSupplyChainSolutions();

  const image = data.image;

  return (
    <styled.wrapper>
      <styled.content>
        <styled.title>{data.title}</styled.title>
        <styled.subtitle>{data.description}</styled.subtitle>
        <styled.listHeader>{data.list.title}</styled.listHeader>

        <styled.list>
          {data.list.items.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </styled.list>
      </styled.content>

      <styled.imagesWrapper>
        <styled.imagesContainer>
          <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          <styled.waveTop />
          <styled.waveBottom />
        </styled.imagesContainer>

        <styled.rectangle />

        <styled.tooltip tooltip={data.tooltip} />
      </styled.imagesWrapper>
    </styled.wrapper>
  );
}

export default IntelligentSupplyChainSolutions;
