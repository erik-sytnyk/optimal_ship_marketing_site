import styled from 'styled-components';

import Button from 'src/components/common/Button';
import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries} from 'src/styles/shared';

export const button = styled(Button)`
  width: 100%;

  @media ${mediaQueries.tablet} {
    width: 34.1rem;
  }
`;

export const tooltip = styled(Tooltip)`
  padding: 3.2rem 1.6rem 3.2rem 3.2rem;
  bottom: 0;
  right: 0;
  width: 95%;

  @media ${mediaQueries.tablet} {
    bottom: 0;
    left: 4rem;
    width: 45.7rem;
    padding: 2.2rem 3.2rem 4.2rem;
  }
`;
