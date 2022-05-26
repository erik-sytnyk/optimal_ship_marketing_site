import styled from 'styled-components';

import {mediaQueries, title_03, body_01} from 'src/styles/shared';

export const listItem = styled.li`
  margin: 4rem 0 0 3rem;
  list-style-type: disc;
  list-style-position: outside;

  @media ${mediaQueries.tablet} {
    margin: 4rem 0 0 2.5rem;
    list-style-position: initial;
  }
`;

export const subtitle = styled.div`
  ${title_03};
`;

export const description = styled.div`
  ${body_01};
`;
