import styled from 'styled-components';

import {body_01, mediaQueries} from 'src/styles/shared';

export const title = styled.div`
  ${body_01};
`;

export const listItem = styled.li`
  margin: 0 0 4rem 3rem;
  list-style-type: disc;
  list-style-position: outside;

  @media ${mediaQueries.tablet} {
    margin: 0 0 4rem 2.5rem;
    list-style-position: initial;
  }
`;
