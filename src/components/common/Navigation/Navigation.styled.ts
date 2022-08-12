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
const DROPDOWN_BUTTON_MAX_WIDTH = '18rem';
const DROPDOWN_BUTTON_MIN_WIDTH = '14rem';
const BUTTON_HEIGHT = '6.2rem';
const MARGIN_X = '1.4rem';
const MOBILE_LINK_PADDING = '1.4rem 1.6rem';
const BUTTON_BOX_SHADOW = `0 0.4rem 2rem rgba(0, 0, 0, 0.15)`;
const MEDIA_TABLET_MAX = mediaQueries.tabletLargeMax;
const MEDIA_TABLET_MIN = mediaQueries.tabletLargeMin;
const HIGHLIGHT_LINK_STYLES = `
  padding: ${MOBILE_LINK_PADDING};

    @media ${MEDIA_TABLET_MIN} {
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
const UNDO_HIGHLIGHT_LINK_STYLES = `
  &:hover {
    background-color: unset;
  }

  &:last-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
const DROPDOWN_LINK_STYLES = `
  text-decoration: none;
  color: ${colors.type_dark};
  ${largeFont};
  cursor: pointer;

  @media ${MEDIA_TABLET_MIN} {
    letter-spacing: -0.022em;
    height: ${BUTTON_HEIGHT};
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mainFont};
    }
`;

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

  @media ${MEDIA_TABLET_MIN} {
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

  @media ${MEDIA_TABLET_MIN} {
    display: flex;
    align-items: center;
  }
`;

export const navButtonContainer = styled.div`
  display: none;

  @media ${MEDIA_TABLET_MIN} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${MARGIN_X};
  }

  @media ${mediaQueries.laptop} {
    display: none;
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
  ${HIGHLIGHT_LINK_STYLES};

  @media ${mediaQueries.laptop} {
    ${UNDO_HIGHLIGHT_LINK_STYLES};

    border-bottom: ${props => (props.active ? mainBorder : '0.4rem solid transparent')};
  }
`;

export const link = styled.a`
  ${DROPDOWN_LINK_STYLES};

  @media ${mediaQueries.laptop} {
    ${largeFont};
    height: ${navHeight};
    width: 11.1rem;
  }
`;

export const oldWebsiteTooltip = styled.div`
  @media ${MEDIA_TABLET_MIN} {
    display: none;
  }
`;

export const oldWebsiteButton = styled.div`
  @media ${MEDIA_TABLET_MIN} {
    position: relative;
    background: ${colors.white};
    box-shadow: ${BUTTON_BOX_SHADOW};
    border-radius: ${BORDER_RADIUS};
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    margin-right: ${MARGIN_X};
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

  @media ${MEDIA_TABLET_MIN} {
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

  @media ${MEDIA_TABLET_MIN} {
    display: none;
  }
`;

export const navMenuWrapper = styled.div`
  height: 100%;
  padding-top: ${navHeightMobile};
`;

export const navMenuContainer = styled.div`
  margin-top: -${navHeightMobile};
  height: 100%;
  background-color: ${colors.white};
  margin-right: 1.6rem;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const dropDownLink = styled.a`
  ${DROPDOWN_LINK_STYLES};
`;

export const toolLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

export const toolLink = styled.li`
  ${HIGHLIGHT_LINK_STYLES};
`;

export const dropdownButton = styled.div`
  height: ${BUTTON_HEIGHT};
  width: ${DROPDOWN_BUTTON_MAX_WIDTH};
  padding: 0 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.accent_orange_light};
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
  }

  @media ${mediaQueries.desktopLarge} {
    width: ${DROPDOWN_BUTTON_MIN_WIDTH};
  }
`;

export const dropDown = styled.div`
  @media ${MEDIA_TABLET_MIN} {
    display: none;
  }

  @media ${mediaQueries.desktopLarge} {
    width: ${DROPDOWN_BUTTON_MIN_WIDTH};
  }
`;

export const dropdownWrapper = styled.div`
  position: relative;
  background: ${colors.white};
  box-shadow: ${BUTTON_BOX_SHADOW};
  border-radius: ${BORDER_RADIUS};
  margin-left: ${MARGIN_X};
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

  &:hover ${dropDown} {
    background-color: ${colors.white};
    border-radius: 0 0 ${BORDER_RADIUS} ${BORDER_RADIUS};
    display: initial;
    position: absolute;
    top: ${BUTTON_HEIGHT};
    left: 0;
    width: ${DROPDOWN_BUTTON_MAX_WIDTH};
    text-align: center;
  }

  @media ${mediaQueries.desktopLarge} {
    width: ${DROPDOWN_BUTTON_MIN_WIDTH};

    &:hover ${dropDown} {
      width: ${DROPDOWN_BUTTON_MIN_WIDTH};
    }
  }

  @media ${MEDIA_TABLET_MAX} {
    display: none;
  }
`;
