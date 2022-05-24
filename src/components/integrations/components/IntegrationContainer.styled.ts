import styled from 'styled-components';

import {mediaQueries, mainFontSmallSpacing, title_01, title_03, body_01, link} from 'src/styles/shared';

export const wrapper = styled.div`
  padding: 1.6rem 1.6rem 6rem;

  & a {
    ${link};
  }

  @media ${mediaQueries.tablet} {
    padding: 3.2rem 4rem 6rem 13.5rem;
    max-width: 98.9rem;
  }
`;

export const navigationTitle = styled.div`
  ${mainFontSmallSpacing};
`;

export const title = styled.div`
  ${title_01};
  margin: 2.8rem 0 3.2rem;

  @media ${mediaQueries.tablet} {
    margin: 3rem 0 3.2rem;
  }
`;

export const subtitle = styled.div`
  ${title_03};
  margin-bottom: 3.2rem;
`;

export const description = styled.div`
  ${body_01};
  margin-bottom: 3.2rem;
`;

export const listItem = styled.li`
  list-style-position: inside;
  ${body_01};

  @media ${mediaQueries.tablet} {
    list-style-position: initial;
    margin-left: 2rem;
  }
`;
