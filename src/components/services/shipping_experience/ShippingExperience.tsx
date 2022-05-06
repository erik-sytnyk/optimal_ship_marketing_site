import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function ShippingExperience() {
  const data = dataService.getShippingExperience();

  const image = data.image;

  return (
    <styled.wrapper>
      <styled.content>
        <styled.title>{data.title}</styled.title>
        <styled.description>
          <strong>{data.description[0]}</strong>
        </styled.description>
        <br />
        <br />
        <styled.description>{data.description[1]}</styled.description>
      </styled.content>

      <styled.imageWrapper>
        <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />

        <styled.tooltip id="shipping-experience-tooltip" tooltip={data.tooltip} />
      </styled.imageWrapper>
    </styled.wrapper>
  );
}

export default ShippingExperience;
