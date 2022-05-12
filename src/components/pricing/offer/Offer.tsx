import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function Offer() {
  const data = dataService.getPricingOffer();

  const image = data.image;

  return (
    <styled.wrapper>
      <styled.background src={image.url} alt={image.alt} priority={true} layout="fill" objectFit="cover" />

      <styled.rectangleTop />
      <styled.rectangleBottom />

      <styled.content>
        <styled.title>{data.title}</styled.title>

        {data.list.map((item, index) => {
          const itemImage = item.icon;

          return (
            <styled.item key={index}>
              <Image src={itemImage.url} alt={itemImage.alt} width={itemImage.width} height={itemImage.height} />

              <styled.text>{item.text}</styled.text>
            </styled.item>
          );
        })}

        <styled.buttonContainer>
          <styled.button outline>{data.button}</styled.button>
        </styled.buttonContainer>
      </styled.content>

      <styled.backgroundMobile src={image.url} alt={image.alt} width={image.width} height={image.height} />
    </styled.wrapper>
  );
}

export default Offer;
