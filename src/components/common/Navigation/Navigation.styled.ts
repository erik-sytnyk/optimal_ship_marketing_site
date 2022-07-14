import styled, {css} from 'styled-components';

import {
  mediaQueries,
  colors,
  navHeightMobile,
  navHeight,
  largeFont,
  mainBorder,
  mainFont,
  boxShadow
} from 'src/styles/shared';

const BORDER_RADIUS = '0.8rem';
const TOOLS_BUTTON_MAX_WIDTH = '18rem';
const TOOLS_BUTTON_MIN_WIDTH = '14rem';
const BUTTON_HEIGHT = '6.2rem';

export const nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.white};
  height: ${navHeightMobile};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);
  padding: 0 1.6rem 0 2.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  @media ${mediaQueries.laptop} {
    height: ${navHeight};
    box-shadow: none;
    padding: 0 3.2rem 0 1.2rem;
    justify-content: initial;
  }
`;

export const navCollapse = styled.div`
  display: none;

  @media ${mediaQueries.laptop} {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const logo = styled.div`
  cursor: pointer;
`;

export const searchContainer = styled.div`
  display: none;

  @media ${mediaQueries.laptop} {
    display: flex;
    align-items: center;
  }
`;

export const navLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  @media ${mediaQueries.laptop} {
    flex-direction: row;
  }
`;

export const navLink = styled.li`
  padding: 1.4rem 1.6rem;

  @media ${mediaQueries.laptop} {
    padding: 0;
    border-bottom: ${props => (props.active ? mainBorder : '0.4rem solid transparent')};
  }
`;

export const link = styled.a`
  text-decoration: none;
  color: ${colors.type_dark};
  ${largeFont};

  @media ${mediaQueries.laptop} {
    letter-spacing: -0.022em;
    height: ${navHeight};
    width: 11.1rem;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const oldWebsiteTooltip = styled.div`
  @media ${mediaQueries.laptop} {
    display: none;
  }
`;

export const oldWebsiteButton = styled.div`
  @media ${mediaQueries.tablet} {
    position: relative;
    background: ${colors.white};
    box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.15);
    border-radius: ${BORDER_RADIUS};
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    margin-right: 1.4rem;
    white-space: nowrap;
    cursor: pointer;
    ${mainFont};

    &:hover ${oldWebsiteTooltip} {
      background-color: ${colors.white};
      border-radius: 1.2rem;
      display: initial;
      position: absolute;
      top: 7.8rem;
      left: -6.5rem;
      white-space: normal;
      width: 39.4rem;
      padding: 2rem;
      text-align: center;
      filter: drop-shadow(${boxShadow});
      ${largeFont};

      &::before {
        content: '';
        display: block;
        width: 6.8rem;
        height: 2.4rem;
        position: absolute;
        top: 0.4rem;
        right: 15rem;
        transform: rotate(45deg);
        background: transparent;
        z-index: -1;
        background-color: ${colors.white};
      }
    }
  }

  @media ${mediaQueries.desktopLarge} {
    width: 20rem;
    height: ${BUTTON_HEIGHT};

    &:hover ${oldWebsiteTooltip} {
      left: -9.5rem;
    }
  }

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const icon = styled.div`
  margin-left: 0.4rem;

  @media ${mediaQueries.desktopLarge} {
    display: none;
  }
`;

export const boxIcon = styled.div`
  margin-top: 0.55rem;
  margin-left: 0.6rem;

  @media ${mediaQueries.desktopLarge} {
    display: none;
  }
`;

export const toggler = styled.div`
  cursor: pointer;

  @media ${mediaQueries.laptop} {
    display: none;
  }
`;

export const navMenu = styled.div`
  width: 0;
  height: 100vh;
  position: absolute;
  top: ${navHeightMobile};
  left: 0;
  background-color: darkgrey;
  transition: 0.5s;

  ${props =>
    props.visible &&
    css`
      width: 100%;
      transition: 0.5s;
    `}

  @media ${mediaQueries.laptop} {
    display: none;
  }
`;

export const navMenuContainer = styled.div`
  height: 100%;
  background-color: ${colors.white};
  margin-right: 1.6rem;
`;

export const dropDownLink = styled.a`
  text-decoration: none;
  color: ${colors.type_dark};
  ${largeFont};
  cursor: pointer;

  @media ${mediaQueries.laptop} {
    letter-spacing: -0.022em;
    height: ${BUTTON_HEIGHT};
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mainFont};
  }
`;

export const toolLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export const toolLink = styled.li`
  padding: 1.4rem 1.6rem;

  @media ${mediaQueries.laptop} {
    padding: 0;

    &:hover {
      background-color: ${colors.accent_orange_light};
    }

    &:last-child {
      border-bottom-left-radius: ${BORDER_RADIUS};
      border-bottom-right-radius: ${BORDER_RADIUS};
    }
  }
`;

export const toolsButton = styled.div`
  height: ${BUTTON_HEIGHT};
  width: ${TOOLS_BUTTON_MAX_WIDTH};
  padding: 0 1.6rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${colors.accent_orange_light};
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
  }

  @media ${mediaQueries.desktopLarge} {
    width: ${TOOLS_BUTTON_MIN_WIDTH};
  }
`;

export const toolsDropDown = styled.div`
  @media ${mediaQueries.laptop} {
    display: none;
  }

  @media ${mediaQueries.desktopLarge} {
    width: ${TOOLS_BUTTON_MIN_WIDTH};
  }
`;

export const toolsWrapper = styled.div`
  position: relative;
  background: ${colors.white};
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.15);
  border-radius: ${BORDER_RADIUS};
  margin-left: 1.4rem;
  white-space: nowrap;
  cursor: pointer;
  ${mainFont};
  text-align: center;
  border: none;

  &:hover {
    filter: drop-shadow(${boxShadow});
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:hover ${toolsDropDown} {
    background-color: ${colors.white};
    border-radius: 0 0 ${BORDER_RADIUS} ${BORDER_RADIUS};
    display: initial;
    position: absolute;
    top: ${BUTTON_HEIGHT};
    left: 0;
    width: ${TOOLS_BUTTON_MAX_WIDTH};
    text-align: center;
  }

  @media ${mediaQueries.desktopLarge} {
    width: ${TOOLS_BUTTON_MIN_WIDTH};

    &:hover ${toolsDropDown} {
      width: ${TOOLS_BUTTON_MIN_WIDTH};
    }
  }

  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
