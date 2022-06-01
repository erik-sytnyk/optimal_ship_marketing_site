import styled from 'styled-components';

import {mediaQueries, title_01, body_02, link} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 3.2rem 1.6rem 8rem;

  @media ${mediaQueries.tablet} {
    padding: 6rem 13.5rem 11.8rem;
  }
`;

export const contactsContainer = styled.div`
  width: 100%;

  @media ${mediaQueries.tablet} {
    width: 45.8rem;
  }
`;

export const title = styled.div`
  ${title_01};
  margin-bottom: 3.2rem;
`;

export const text = styled.div`
  ${body_02};
  margin-bottom: 4rem;

  & a {
    ${link};
  }
`;
