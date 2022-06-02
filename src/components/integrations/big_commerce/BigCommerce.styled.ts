import styled from 'styled-components';

import {body_01, mediaQueries} from 'src/styles/shared';

export const text = styled.div`
  ${body_01};
`;

export const title = styled(text)`
  font-weight: bold;
`;

export const extraTitle = styled(title)`
  margin-bottom: 3rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 0;
  }
`;

export const contentTitle = styled(text)`
  margin-bottom: 3rem;
`;

export const listItem = styled.li`
  ${body_01};
  margin-left: 2.3rem;
  margin-top: 3rem;
`;

export const contentExtra = styled.div`
  margin: 3rem 0 6rem;
`;