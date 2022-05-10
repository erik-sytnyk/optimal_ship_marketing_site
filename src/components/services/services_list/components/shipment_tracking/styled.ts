import styled from 'styled-components';

import Container from '../container/Container';
import Content from '../content/Content';

import {mediaQueries} from 'src/styles/shared';

export const container = styled(Container)`
  @media ${mediaQueries.tablet} {
    padding: 10rem 8.8rem 10rem 6.4rem;
  }
`;

export const content = styled(Content)`
  padding: 4rem 1.6rem;

  @media ${mediaQueries.tablet} {
    width: 64.8rem;
    padding: 6rem 12rem 6rem 7rem;
  }
`;
