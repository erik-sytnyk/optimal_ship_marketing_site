import styled from 'styled-components';

import Container from '../container/Container';
import Content from '../content/Content';

import {mediaQueries} from 'src/styles/shared';

export const container = styled(Container)`
  padding-bottom: 4rem;
  flex-direction: column-reverse;

  @media ${mediaQueries.tablet} {
    padding: 10.4rem 7.8rem 9.6rem 8.8rem;
    flex-direction: row;
  }
`;

export const content = styled(Content)`
  padding: 4rem 1.6rem;

  @media ${mediaQueries.tablet} {
    width: 57.6rem;
    padding: 6rem 4.3rem;
  }
`;

export const imageContainer = styled.div`
  width: 34.2rem;
  margin: 0 auto;

  @media ${mediaQueries.tablet} {
    width: auto;
    margin: 0;
  }
`;
