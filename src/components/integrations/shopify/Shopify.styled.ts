import styled from 'styled-components';

import Button from 'src/components/common/Button';

import {mediaQueries} from 'src/styles/shared';
import {input as StyledInput} from 'src/components/common/SearchInput/styled';

export const form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.6rem 0 0;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    margin: 4rem 0 8rem;
  }
`;

export const input = styled(StyledInput)`
  flex: 1;
`;

export const button = styled(Button)`
  width: 100%;
  margin: 3.6rem 0 0;

  @media ${mediaQueries.tablet} {
    width: auto;
    margin: 0 1.6rem;
  }
`;
