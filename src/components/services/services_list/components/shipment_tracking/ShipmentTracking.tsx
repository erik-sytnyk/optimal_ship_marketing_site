import Image from 'next/image';

import * as styled from './styled';

interface Props {
  item: any;
  isOdd: boolean;
}

function ShipmentTracking({item, isOdd}: Props) {
  const image = item.image;

  return (
    <styled.container isOdd={isOdd}>
      <styled.content title={item.title} description={item.description} buttons={item.buttons} />
      <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
    </styled.container>
  );
}

export default ShipmentTracking;
