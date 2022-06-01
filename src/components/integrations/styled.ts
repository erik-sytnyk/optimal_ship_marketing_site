import styled, {css} from 'styled-components';

import {mediaQueries, sectionTitle_1, body_01, colors, boxShadow_2, body_03, mainFont} from 'src/styles/shared';

export const wrapper = styled.div`
  padding-top: 3.2rem;

  @media ${mediaQueries.tablet} {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 8rem;
  }
`;

export const container = styled.div`
  max-width: 117rem;
  width: 100%;
  padding: 0 1.6rem;
  margin-bottom: 6rem;
`;

export const header = styled.div`
  ${sectionTitle_1};
  @media ${mediaQueries.tablet} {
    white-space: pre-line;
  }
`;

export const description = styled.div`
  margin-top: 4rem;
  ${body_01};

  & a {
    text-decoration: none;
    color: ${colors.accent_orange};
  }

  @media ${mediaQueries.tablet} {
    columns: 2;
    column-gap: 1.6rem;
  }
`;

export const cardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36rem;
  height: 28.5rem;
  margin-top: 4rem;
  box-shadow: ${boxShadow_2};
  border-radius: 0.6rem;
  padding: 3.2rem 2.4rem 2.4rem;

  ${props =>
    props.clickable &&
    css`
      cursor: pointer;
    `}
`;

export const cardTitle = styled.div`
  ${body_01};
  font-weight: 700;
  margin: 1.6rem 0 0.8rem;
`;

export const cardDescription = styled.div`
  ${body_03};
`;

export const cardButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const cardButton = styled.button`
  background: ${colors.type_dark};
  width: 14.4rem;
  height: 3.4rem;
  border-radius: 0.6rem;
  ${mainFont};
  color: ${colors.white};
  border: none;
  cursor: pointer;

  @media ${mediaQueries.tablet} {
    width: 15.2rem;
  }
`;
