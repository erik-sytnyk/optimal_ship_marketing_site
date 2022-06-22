import styled from 'styled-components';

import Wave from 'src/components/common/Wave';
import Tooltip from 'src/components/common/Tooltip';

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

export const tooltip = styled(Tooltip)`
  width: 34.8rem;
  padding: 3.2rem 3.6rem 4rem 3.3rem;
  top: 11rem;
  left: 0;
  right: 0;
  margin: 0 auto;

  .quote {
    margin-bottom: 1.6rem;
  }

  @media ${mediaQueries.tablet} {
    left: 0;
    top: 14rem;
    margin: 0;
  }
`;
