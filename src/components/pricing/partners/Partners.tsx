import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function Partners() {
  const data = dataService.getPartners();

  return <styled.wrapper></styled.wrapper>;
}

export default Partners;
