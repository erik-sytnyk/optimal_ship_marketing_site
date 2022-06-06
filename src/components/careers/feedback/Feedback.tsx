import dataService from 'src/services/dataService';

import * as styled from './Feedback.styled';

function Feedback() {
  const data = dataService.getCareersFeedback();

  return <styled.wrapper></styled.wrapper>;
}

export default Feedback;
