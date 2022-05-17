import styled, {css} from 'styled-components';

import {mediaQueries, title_01, body_01, mainFontSmallSpacing, colors} from 'src/styles/shared';

const LINK = css`
  text-decoration: none;
  color: ${colors.accent_orange};
`;

export const wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3.2rem 1.6rem 6rem;

  @media ${mediaQueries.tablet} {
    padding: 6rem 1.6rem;
  }
`;

export const container = styled.div`
  max-width: 93.3rem;
`;

export const title = styled.div`
  ${title_01};
  margin-bottom: 2.4rem;
`;

export const subtitle = styled.div`
  ${body_01};
  font-weight: 800;
  margin-bottom: 0.8rem;
`;

export const lastUpdated = styled.div`
  ${mainFontSmallSpacing};
  margin-bottom: 2.4rem;
`;

export const description = styled.div`
  ${mainFontSmallSpacing};

  > a {
    ${LINK};
  }
  & li {
    margin-left: 2.5rem;
  }
`;

export const itemContainer = styled.div`
  margin-top: 3.2rem;
`;

export const itemTitle = styled.div`
  ${body_01};
  font-weight: 800;
  margin-bottom: 1.6rem;
`;

export const childContainer = styled.div`
  margin-top: 2.4rem;
`;

export const childTitle = styled.div`
  ${mainFontSmallSpacing};
  font-weight: 800;
  text-transform: uppercase;
`;

export const childListItem = styled.li`
  ${mainFontSmallSpacing};
  margin-left: 2.8rem;

  > a {
    ${LINK};
  }
`;
