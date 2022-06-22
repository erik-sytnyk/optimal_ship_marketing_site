import styled from 'styled-components';

import Button from 'src/components/common/Button';

import {mediaQueries} from 'src/styles/shared';

export const button = styled(Button)`
  width: 100%;

  @media ${mediaQueries.tablet} {
    width: 34.1rem;
  }
`;
