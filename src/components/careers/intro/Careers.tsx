import dataService from 'src/services/dataService';

import * as styled from './Careers.styled';

function Careers() {
  const data = dataService.getCareersIntro();

  return <styled.wrapper></styled.wrapper>;
}

export default Careers;
