import styled from 'styled-components';

import {mediaQueries, title_01, body_01, mainFontSmallSpacing} from 'src/styles/shared';

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
`;

export const privacyItem = styled.div`
  margin-top: 3.2rem;
`;

export const privacyItemTitle = styled.div`
  ${body_01};
  font-weight: 800;
  margin-bottom: 1.6rem;
`;
