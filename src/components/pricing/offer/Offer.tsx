import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function Offer() {
  const data = dataService.getPricingOffer();

  return <styled.wrapper></styled.wrapper>;
}

export default Offer;
