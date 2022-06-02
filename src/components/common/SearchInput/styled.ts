import styled from 'styled-components';

import {input as inputStyles, mediaQueries} from 'src/styles/shared';

export const container = styled.div`
  display: flex;
  position: relative;
  width: calc(100% - 1.6rem);
  padding: 2.4rem 1.6rem 4.8rem;

  @media ${mediaQueries.tablet} {
    width: 30.9rem;
    padding: 0;
  }
`;

export const input = styled.input`
  ${inputStyles};
  width: 100%;
`;
