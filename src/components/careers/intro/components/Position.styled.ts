import styled from 'styled-components';

import {colors, mediaQueries, mainFontSmallSpacing, boxShadow_2} from 'src/styles/shared';

export const wrapper = styled.div`
  background-color: ${colors.white};
  box-shadow: ${boxShadow_2};
  width: auto;
  margin: 0 -1.6rem 2.4rem;

  @media ${mediaQueries.tablet} {
    width: 100%;
    margin: 0 0 2.4rem;
  }
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

export const title = styled.div`
  ${mainFontSmallSpacing};
  font-weight: 800;
  margin-left: 1.5rem;

  @media ${mediaQueries.tablet} {
    margin-left: 2.3rem;
    white-space: pre-line;
  }
`;

export const positionDetails = styled.div`
  ${mainFontSmallSpacing};
  padding: 0 2.4rem 3.4rem 7.2rem;

  @media ${mediaQueries.tablet} {
    padding: 0 2.4rem 4rem 8.7rem;
  }
`;

export const detailsContainer = styled.div`
  margin-bottom: 3rem;
`;

export const subtitle = styled.div`
  font-weight: 700;
`;

export const listItem = styled.li`
  margin-left: 3rem;
`;
