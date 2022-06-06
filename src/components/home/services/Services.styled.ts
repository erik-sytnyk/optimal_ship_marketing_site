import styled from 'styled-components';

import Circles from 'src/components/common/Circles';
import Wave from 'src/components/common/Wave';

import {mediaQueries} from 'src/styles/shared';

export const firstCircles = styled(Circles)`
  display: none;

  @media ${mediaQueries.tablet} {
    position: absolute;
    display: flex;
    top: 0;
    right: 4rem;
    z-index: 20;
  }
`;

export const secondCircles = styled(Circles)`
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 15;

  @media ${mediaQueries.tablet} {
    top: 3.9rem;
    right: 4.1rem;
  }
`;

export const firstWave = styled(Wave)`
  right: 0;
  bottom: 3.8rem;
  width: 12rem;
  height: 4.8rem;
  z-index: 15;

  @media ${mediaQueries.tablet} {
    right: 15.7rem;
    bottom: 3.8rem;
    width: 16rem;
    height: 4.8rem;
  }
`;

export const secondWave = styled(Wave)`
  right: 0;
  top: 3.2rem;
  width: 12rem;
  height: 4.8rem;
  z-index: 15;

  @media ${mediaQueries.tablet} {
    width: 16rem;
    right: 2rem;
  }
`;
