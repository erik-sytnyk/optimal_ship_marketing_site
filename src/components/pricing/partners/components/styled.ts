import styled, {css} from 'styled-components';

import {colors, mediaQueries, mainFontSmallSpacing, boxShadow_2} from 'src/styles/shared';

export const wrapper = styled.div`
  background-color: ${colors.white};
  box-shadow: ${boxShadow_2};
  width: 100%;
  margin-bottom: 2.4rem;
`;

export const headerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 0;
  width: 100%;

  @media ${mediaQueries.tablet} {
    height: 9.6rem;
    padding: 0;
  }
`;

export const content = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.1rem;

  @media ${mediaQueries.tablet} {
    padding-left: 3.1rem;
  }
`;

export const header = styled.div`
  display: none;

  @media ${mediaQueries.tablet} {
    display: initial;
    ${mainFontSmallSpacing};
    max-width: 80.4rem;
    margin-left: 4rem;
  }
`;

export const headerMobile = styled.div`
  ${mainFontSmallSpacing};
  max-width: 20.3rem;
  margin-left: 2.3rem;

  @media ${mediaQueries.tablet} {
    display: none;
  }
`;

export const iconContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 9.2rem;
  padding: 0 0.35rem;

  @media ${mediaQueries.tablet} {
    width: 21.6rem;
    padding: 0;
  }
`;

export const body = styled.div`
  ${mainFontSmallSpacing};
  padding: 0 2.4rem 0.4rem 6.4rem;

  @media ${mediaQueries.tablet} {
    max-width: 93.2rem;
    padding: 0 2.4rem 0.4rem 10.4rem;
  }
`;

export const textRow = styled.div`
  margin-bottom: 2rem;
`;
