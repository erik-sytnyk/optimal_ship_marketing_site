import Image from 'next/image';

import * as styled from './styled';

interface Props {
  item: any;
  isOdd: boolean;
}

function SchedulePickup({item, isOdd}: Props) {
  const image = item.image;
  const extraImage = item.extraImage;

  return (
    <styled.container isOdd={isOdd}>
      <styled.content title={item.title} description={item.description} buttons={item.buttons} />

      <styled.imageBlockContainer>
        <styled.imageContainer>
          <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
        </styled.imageContainer>

        <styled.extraImageContainer>
          <Image src={extraImage.url} alt={extraImage.alt} width={extraImage.width} height={extraImage.height} />
        </styled.extraImageContainer>
      </styled.imageBlockContainer>
    </styled.container>
  );
}

export default SchedulePickup;
