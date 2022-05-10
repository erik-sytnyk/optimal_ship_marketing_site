import Image from 'next/image';

import * as styled from './styled';

interface Props {
  item: any;
  isOdd: boolean;
}

function OptimalLogistics({item, isOdd}: Props) {
  const image = item.image;

  return (
    <styled.container isOdd={isOdd}>
      <styled.content title={item.title} description={item.description} buttons={item.buttons} />

      <styled.imageBlockContainer>
        <styled.imageContainer>
          <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
        </styled.imageContainer>
        <styled.rectangle />
      </styled.imageBlockContainer>
    </styled.container>
  );
}

export default OptimalLogistics;
