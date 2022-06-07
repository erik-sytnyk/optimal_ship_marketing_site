import styled from 'styled-components';

import {mediaQueries, sectionTitle_1, mainFontSmallSpacing, body_01, link, title_01} from 'src/styles/shared';

export const container = styled.div`
  padding: 3.2rem 1.6rem 2.4rem;

  @media ${mediaQueries.tablet} {
    max-width: 93.5rem;
    padding: 6rem 0 2.4rem;
    margin: 0 auto;
  }
`;

export const header = styled.div`
  ${title_01};
  margin-bottom: 4rem;

  @media ${mediaQueries.tablet} {
    ${sectionTitle_1};
  }
`;

export const text = styled.div`
  ${mainFontSmallSpacing};

  > a {
    ${link};
  }
`;

export const benefitsContainer = styled.div`
  margin: 3rem 0 4rem;
`;

export const benefitsList = styled.ul`
  ${mainFontSmallSpacing};
  margin-top: 3rem;
`;

export const benefitsListItem = styled.li`
  margin-left: 3rem;
`;

export const title = styled.div`
  ${body_01};
  font-weight: 800;
  margin-bottom: 2.4rem;
`;

export const footer = styled.div`
  ${body_01};
  font-weight: 800;
  margin-top: 6rem;
`;
