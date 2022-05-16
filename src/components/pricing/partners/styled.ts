import styled from 'styled-components';

import {mediaQueries, sectionTitle_3, sectionTitle_1} from 'src/styles/shared';

export const wrapper = styled.div`
  padding-top: 4rem;

  @media ${mediaQueries.tablet} {
    padding: 6rem 3.2rem 0 4rem;
  }
`;

export const title = styled.div`
  ${sectionTitle_1};
  text-align: center;
  margin-bottom: 3rem;

  @media ${mediaQueries.tablet} {
    ${sectionTitle_3};
  }
`;
