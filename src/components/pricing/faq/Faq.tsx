import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function FAQ() {
  const data = dataService.getFAQ();

  return <styled.wrapper></styled.wrapper>;
}

export default FAQ;
