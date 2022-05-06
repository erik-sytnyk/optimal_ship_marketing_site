import Router from 'next/router';

import dataService from 'src/services/dataService';

import ServiceItem from './components/ServiceItem';

import * as styled from './styled';

export type PageId = 'home' | 'services';

interface Props {
  pageId: PageId;
}

function HowItWorks({pageId}: Props) {
  const data = dataService.getHowItWorks();

  function aboutOurServices() {
    Router.push('/services');
  }

  return (
    <styled.wrapper pageId={pageId}>
      <styled.title pageId={pageId}>{data.title}</styled.title>

      <styled.servicesContainer>
        {data.list.map(service => {
          return <ServiceItem key={service.index} service={service} pageId={pageId} />;
        })}
      </styled.servicesContainer>

      {pageId === 'home' && <styled.button onClick={aboutOurServices}>{data.button}</styled.button>}
    </styled.wrapper>
  );
}

export default HowItWorks;
