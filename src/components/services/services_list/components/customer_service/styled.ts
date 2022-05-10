import styled from 'styled-components';

import Container from '../container/Container';
import Content from '../content/Content';

import {mediaQueries, mainBorder} from 'src/styles/shared';

export const container = styled(Container)`
  padding: 6.8rem 0 10rem;

  @media ${mediaQueries.tablet} {
    padding: 6.8rem 7.8rem 8rem 5.8rem;
  }
`;

export const content = styled(Content)`
  padding: 3rem 1.6rem 0;

  @media ${mediaQueries.tablet} {
    width: 57.6rem;
    padding: 2.1rem 4.3rem 6.5rem;
  }
`;

export const imageBlockContainer = styled.div`
  position: relative;
  min-height: 41.4rem;

  @media ${mediaQueries.tablet} {
    width: 65.4rem;
    height: 68.2rem;
  }
`;

export const imageContainer = styled.div`
  position: absolute;
  top: 2rem;
  z-index: 20;

  @media ${mediaQueries.tablet} {
    top: auto;
    right: 0;
    bottom: 0;
  }
`;

export const rectangle = styled.div`
  position: absolute;
  width: 35.6rem;
  height: 39.8rem;
  top: 0;
  left: -4.3rem;
  border: ${mainBorder};
  z-index: 10;

  @media ${mediaQueries.tablet} {
    height: 52.6rem;
    top: 0;
    left: 0;
  }
`;
