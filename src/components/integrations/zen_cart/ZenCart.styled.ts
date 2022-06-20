import styled from 'styled-components';

import {mediaQueries, body_01} from 'src/styles/shared';

export const unorderedList = styled.ul`
  margin-top: 3rem;
`;

export const listItem = styled.li`
  margin: 4rem 0 0 3rem;
  list-style-type: disc;
  list-style-position: outside;

  @media ${mediaQueries.tablet} {
    margin: 4rem 0 0 2.5rem;
    list-style-position: initial;
  }
`;

export const title = styled.div`
  ${body_01};
  margin-top: 3rem;
`;
