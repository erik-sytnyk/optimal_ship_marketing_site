import styled from 'styled-components';

import Button from 'src/components/common/Button';

import {mediaQueries} from 'src/styles/shared';

export const button = styled(Button)`
  margin: 4rem 1.6rem 0;

  @media ${mediaQueries.tablet} {
    margin-top: 3.6rem;
  }
`;

export const listItem = styled.li`
  margin: 4rem 0 0 2rem;

  @media ${mediaQueries.tablet} {
    margin: 4rem 0 0 2rem;
  }
`;
