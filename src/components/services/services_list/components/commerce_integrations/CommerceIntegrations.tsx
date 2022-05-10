import Image from 'next/image';

import * as styled from './styled';

interface Props {
  item: any;
  isOdd: boolean;
}

function CommerceIntegrations({item, isOdd}: Props) {
  const image = item.image;

  return (
    <styled.container isOdd={isOdd}>
      <styled.imageContainer>
        <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
      </styled.imageContainer>

      <styled.content title={item.title} description={item.description} buttons={item.buttons} />
    </styled.container>
  );
}

export default CommerceIntegrations;
