import styled from 'styled-components';

import Container from '../container/Container';
import Content from '../content/Content';

import {mediaQueries, colors} from 'src/styles/shared';

export const container = styled(Container)`
  padding-bottom: 4rem;

  @media ${mediaQueries.tablet} {
    padding: 7.2rem 5.6rem 9.2rem 6.4rem;
  }
`;

export const content = styled(Content)`
  padding: 6rem 1.6rem;

  @media ${mediaQueries.tablet} {
    width: 64.8rem;
    padding: 6rem 12rem 6rem 7rem;
  }
`;

export const imageBlockContainer = styled.div`
  position: relative;
  min-height: 68.6rem;

  @media ${mediaQueries.tablet} {
    width: 65.6rem;
    height: 68.6rem;
  }
`;

export const imageContainer = styled.div`
  position: absolute;
  top: 3.2rem;
  z-index: 20;

  @media ${mediaQueries.tablet} {
    right: 3.2rem;
  }
`;

export const rectangle = styled.div`
  position: absolute;
  width: 35.1rem;
  height: 65.4rem;
  top: 0;
  right: 0;
  background-color: ${colors.bg_accent_orange};
  z-index: 10;

  @media ${mediaQueries.tablet} {
    width: 47.6rem;
  }
`;
