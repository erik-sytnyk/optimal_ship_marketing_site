import styled from 'styled-components';

import Container from '../container/Container';
import Content from '../content/Content';

import {mediaQueries} from 'src/styles/shared';

export const container = styled(Container)`
  padding-bottom: 3rem;

  @media ${mediaQueries.tablet} {
    padding: 10rem 8.8rem 10rem 7.6rem;
  }
`;

export const content = styled(Content)`
  padding: 4rem 1.6rem;

  @media ${mediaQueries.tablet} {
    width: 57.6rem;
    padding: 6rem 4.3rem;
  }
`;
