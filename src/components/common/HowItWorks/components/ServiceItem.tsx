import Image from 'next/image';

import {PageId} from '../HowItWorks';

import * as styled from './styled';

interface Props {
  service: any;
  pageId: PageId;
}

function ServiceItem({service, pageId}: Props) {
  const image = service.image;

  const displayIndex = pageId === 'services' ? service.index : `0${service.index}`;

  return (
    <styled.container>
      <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
      <styled.index pageId={pageId}>{displayIndex}</styled.index>
      <styled.title pageId={pageId}>{service.title}</styled.title>
      <styled.description>{service.description}</styled.description>
    </styled.container>
  );
}

export default ServiceItem;
