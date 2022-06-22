import dataService from 'src/services/dataService';

import Strip from '../common/Strip';

function OurPrinciples() {
  const data = dataService.getOurPrinciples();

  return <Strip items={data.items} page="about" />;
}

export default OurPrinciples;
