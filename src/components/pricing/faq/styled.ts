import styled from 'styled-components';

import {mediaQueries, sectionTitle_3, body_01} from 'src/styles/shared';

export const wrapper = styled.div`
  padding: 3.6rem 1.6rem 0;

  @media ${mediaQueries.tablet} {
    padding: 3.6rem 13.5rem 0;
  }
`;

export const title = styled.div`
  ${sectionTitle_3};
  margin-bottom: 4rem;

  @media ${mediaQueries.tablet} {
    white-space: pre-line;
  }
`;

export const questionsWrapper = styled.div`
  @media ${mediaQueries.tablet} {
    columns: 57.7rem;
    column-gap: 1.5rem;
  }
`;

export const container = styled.div`
  margin-bottom: 6rem;
`;

export const question = styled.div`
  ${body_01};
  font-weight: 700;
  margin-bottom: 4rem;
`;

export const answer = styled.div`
  white-space: break-spaces;
  ${body_01};
`;
