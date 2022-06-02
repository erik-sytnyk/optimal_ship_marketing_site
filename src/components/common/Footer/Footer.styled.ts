import styled from 'styled-components';

import {mediaQueries, colors, mainFontSmallSpacing, title_02} from 'src/styles/shared';

export const footer = styled.footer`
  margin-top: auto;
  padding: 1.8rem 0 10.8rem;
  background-color: ${colors.type_dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mainFontSmallSpacing};

  @media ${mediaQueries.tablet} {
    padding: 4rem 28.4rem 9rem 13.5rem;
    flex-direction: row;
  }
`;

export const column = styled.div`
  padding-left: 4.6rem;
  margin-bottom: 2.4rem;

  @media ${mediaQueries.tablet} {
    padding-left: 0;
    margin-bottom: 0;
  }
`;

export const header = styled.div`
  ${title_02};
  font-size: 2.7rem;
  color: ${colors.accent_orange};
  margin-bottom: 2.4rem;
`;

export const location = styled.div`
  margin-bottom: 2.4rem;
`;

export const locationItem = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.white};
  margin-bottom: 1.2rem;
`;

export const locationIcon = styled.div`
  margin-right: 0.8rem;
`;

export const socialMedia = styled.div`
  color: ${colors.white};
`;

export const socialIcons = styled.div`
  margin-top: 0.8rem;
`;

export const socialIcon = styled.a`
  margin-right: 3.2rem !important;
`;

export const title = styled.div`
  font-family: 'Nunito Sans Bold';
  margin-top: 2rem;
  margin-bottom: 3rem;
  color: ${colors.white};
`;

export const list = styled.ul`
  color: ${colors.accent_orange_disabled};
  padding-left: 3rem;
`;

export const listItem = styled.li`
  margin-bottom: 1.6rem;
  cursor: pointer;

  > a {
    color: ${colors.accent_orange_disabled};
    text-decoration: none;
  }
`;

export const listItemHidden = styled.li`
  visibility: hidden;
`;

export const badgeContainerMobile = styled.div`
  text-align: center;

  @media ${mediaQueries.tablet} {
    display: none;
  }
`;

export const badgeContainerDesktop = styled.div`
  display: none;

  @media ${mediaQueries.tablet} {
    display: initial;
    position: absolute;
    margin-top: 4.6rem;
  }
`;

export const businessOwner = styled.div`
  margin-bottom: 1.6rem;
  color: ${colors.bg_error_selected};
`;
