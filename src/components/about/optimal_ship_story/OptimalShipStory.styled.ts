import styled from 'styled-components';

import Wave from 'src/components/common/Wave';

import {mediaQueries} from 'src/styles/shared';

export const waveTop = styled(Wave)`
  width: 5.5rem;
  right: 0;
  top: 8.1rem;
  z-index: 15;

  @media ${mediaQueries.tablet} {
    width: 11.5rem;
    top: 55.6rem;
  }
`;

export const waveBottom = styled(Wave)`
  width: 11rem;
  top: 53.5rem;
  left: 0;

  @media ${mediaQueries.tablet} {
    width: 16rem;
    top: 89.4rem;
    left: 15.7rem;
  }
`;
