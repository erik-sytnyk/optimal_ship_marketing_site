import styled from 'styled-components';

import {body_01, colors, mediaQueries, title_02} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.6rem 0;

  @media ${mediaQueries.tablet} {
    padding: 10rem 0;
    justify-content: space-around;
    flex-direction: row;
  }
`;

export const itemContainer = styled.div`
  text-align: center;
  ${body_01};
  font-weight: 700;
`;

export const successNumber = styled.div`
  margin: 3.8rem 0;
  color: ${colors.accent_orange};
  ${title_02};
  font-size: 8rem;
`;

export const divider = styled.div`
  width: 28.2rem;
  margin: 2.4rem 0;
  border-bottom: 0.1rem dashed ${colors.accent_orange};

  @media ${mediaQueries.tablet} {
    display: none;
  }
`;
