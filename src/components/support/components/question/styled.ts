import styled from 'styled-components';

import {colors, mediaQueries, mainFontSmallSpacing, boxShadow_2, link} from 'src/styles/shared';

export const wrapper = styled.div`
  background-color: ${colors.white};
  box-shadow: ${boxShadow_2};
  width: 100%;
  margin-bottom: 2.4rem;
`;

export const headerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2.4rem 1.2rem 2.4rem 2.4rem;
  width: 100%;

  @media ${mediaQueries.tablet} {
    height: 9.6rem;
    padding: 0 0 0 3.1rem;
  }
`;

export const question = styled.div`
  ${mainFontSmallSpacing};
  font-weight: 800;
  margin-left: 1.5rem;

  @media ${mediaQueries.tablet} {
    margin-left: 4rem;
    white-space: pre-line;
  }
`;

export const answer = styled.div`
  ${mainFontSmallSpacing};
  padding: 0 2.4rem 3.4rem 7.2rem;

  > a {
    ${link};
  }
  li {
    margin-left: 1.5rem;
  }

  @media ${mediaQueries.tablet} {
    max-width: 83.8rem;
    padding: 0 2.4rem 4rem 10.4rem;
  }
`;
