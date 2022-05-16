import dataService from 'src/services/dataService';

import PartnerItem from './components/PartnerItem';

import * as styled from './styled';

function Partners() {
  const data = dataService.getPartners();

  return (
    <styled.wrapper>
      <styled.title>{data.title}</styled.title>

      {data.list.map(partner => {
        return <PartnerItem key={partner.partnerName} partner={partner} />;
      })}
    </styled.wrapper>
  );
}

export default Partners;
