import styled from 'styled-components';

import {mediaQueries, navHeight, navHeightMobile} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
`;

export const content = styled.main`
  margin-top: ${navHeightMobile};

  @media ${mediaQueries.tablet} {
    margin-top: ${navHeight};
  }
`;
