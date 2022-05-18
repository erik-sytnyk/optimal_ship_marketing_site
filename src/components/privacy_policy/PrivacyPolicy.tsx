import dataService from 'src/services/dataService';

import * as styled from './styled';

function PrivacyPolicy() {
  const data = dataService.getPrivacyPolicy();

  return (
    <styled.wrapper>
      <styled.container>
        <styled.title>{data.title}</styled.title>
        <styled.subtitle>{data.subtitle}</styled.subtitle>
        <styled.lastUpdated>{data.lastUpdated}</styled.lastUpdated>
        <styled.description>{data.description}</styled.description>

        {data.list.map((item, index) => {
          const indexNumber = index + 1;

          return (
            <styled.privacyItem key={index}>
              <styled.privacyItemTitle>
                {indexNumber}. {item.title}
              </styled.privacyItemTitle>
              <styled.description>{item.description}</styled.description>
            </styled.privacyItem>
          );
        })}
      </styled.container>
    </styled.wrapper>
  );
}

export default PrivacyPolicy;
