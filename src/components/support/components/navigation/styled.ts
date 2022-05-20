import styled from 'styled-components';

import {mediaQueries, mainFontSmallSpacing} from 'src/styles/shared';

export const navigation = styled.div`
  ${mainFontSmallSpacing};
  margin-bottom: 1.6rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 1.8rem;
  }
`;

export const backLink = styled.span`
  cursor: pointer;
`;
