import styled from 'styled-components';

import Circles from 'src/components/common/Circles';
import Wave from 'src/components/common/Wave';
import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries} from 'src/styles/shared';

export const preparationCircles = styled(Circles)`
  display: none;

  @media ${mediaQueries.tablet} {
    position: absolute;
    display: flex;
    top: 0;
    right: 4rem;
    z-index: 20;
  }
`;

export const billPayCircles = styled(Circles)`
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 15;

  @media ${mediaQueries.tablet} {
    top: 3.9rem;
    right: 4.1rem;
  }
`;

export const quoteWave = styled(Wave)`
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

export const pickupWave = styled(Wave)`
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

export const preparationTooltip = styled(Tooltip)`
  padding: 3.2rem 1.5rem 2.4rem 3rem;
  width: 95%;
  bottom: 0;
  right: 0;

  @media ${mediaQueries.tablet} {
    padding: 3.2rem 3rem;
    width: 42rem;
    bottom: 0;
    right: 8.9rem;
  }
`;

export const quoteTooltip = styled(Tooltip)`
  padding: 3.2rem 1rem 3.2rem 1.6rem;
  width: 100%;
  top: 11.4rem;

  @media ${mediaQueries.tablet} {
    padding: 3.2rem;
    width: 42.4rem;
    left: 0;
    top: 15.4rem;
  }
`;

export const billPayTooltip = styled(Tooltip)`
  position: absolute;
  right: 0;
  bottom: 1.6rem;
  padding: 3.2rem 1.8rem 3.2rem 2.8rem;
  width: 95%;

  @media ${mediaQueries.tablet} {
    width: 47.2rem;
    padding: 4.2rem 3rem 3.2rem;
  }
`;

export const pickupTooltip = styled(Tooltip)`
  position: absolute;
  left: 0;
  bottom: 4rem;
  padding: 3.2rem 2.8rem 3.2rem 1.8rem;
  width: 95%;

  .author {
    white-space: normal;
  }

  @media ${mediaQueries.tablet} {
    width: 44.2rem;
    padding: 3.2rem 3rem;
    right: 0;
    left: auto;
    bottom: 4rem;

    .author {
      white-space: pre-line;
    }
  }
`;
