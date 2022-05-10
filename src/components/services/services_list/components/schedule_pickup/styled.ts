import styled from 'styled-components';

import Container from '../container/Container';
import Content from '../content/Content';

import {mediaQueries} from 'src/styles/shared';

export const container = styled(Container)`
  padding-bottom: 2rem;

  @media ${mediaQueries.tablet} {
    padding: 10rem 9.7rem 10rem 3.3rem;
  }
`;

export const content = styled(Content)`
  padding: 4rem 1.6rem;

  @media ${mediaQueries.tablet} {
    width: 66.2rem;
    padding: 6rem 10.2rem 8rem;
  }
`;

export const imageBlockContainer = styled.div`
  position: relative;
  height: 48.6rem;

  @media ${mediaQueries.tablet} {
    width: 65.6rem;
    height: 65.4rem;
  }
`;

export const imageContainer = styled.div`
  position: absolute;

  @media ${mediaQueries.tablet} {
    right: 0;
    top: 0;
  }
`;

export const extraImageContainer = styled.div`
  position: absolute;

  @media ${mediaQueries.tablet} {
    left: 0;
    top: 10.8rem;
  }
`;
