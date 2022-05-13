import styled from 'styled-components';

import {body_04, mainFont, mediaQueries} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.6rem 10rem;

  @media ${mediaQueries.tablet} {
    padding: 4rem 0 10rem;
  }
`;

export const title = styled.div`
  ${body_04};
  letter-spacing: 0.03rem;
  font-weight: 700;
`;

export const description = styled.div`
  ${mainFont};
  margin: 2rem 0 8rem;
`;
