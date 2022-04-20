import Router from 'next/router';

import dataService from '../../../../services/dataService';

import Button from '../../../Button/button';
import ServiceItem from './components/ServiceItem';

function HowItWorks() {
  const data = dataService.getHowItWorks();

  function aboutOurServices() {
    Router.push('/services');
  }

  return (
    <div id="how-it-works">
      <div id="how-it-works-title">{data.title}</div>

      <div id="our-services">
        {data.list.map(service => {
          return <ServiceItem key={service.index} service={service} />;
        })}
      </div>

      <Button onClick={aboutOurServices}>{data.button}</Button>
    </div>
  );
}

export default HowItWorks;
