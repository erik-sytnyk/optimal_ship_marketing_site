import {css} from 'styled-components';

export const colors = {
  white: '#fff',
  black: '#000',

  type_dark: '#363740',
  type_light_passive: '#a4a6b3',

  accent_orange: '#fc7d58',
  accent_orange_light: '#f18b6e',
  accent_orange_disabled: '#c4b9b6',

  bg_error_selected: '#ffd1d1',
  bg_accent_orange: '#ffeae4',
  bg_grey: '#eeeeee',

  gray_2: '4F4F4F',
  gray_6: '#f2f2f2',
  bg_grey_2: '#e9e9e9',
  lists_grey: '#f3f3f3',
  dark_hover: '#484957'
};

export const navHeight = '8rem';
export const navHeightMobile = '10rem';

export const togglerWidth = '3.3rem';

export const dropShadow = '1rem 1rem 1rem rgba(107, 107, 107, 0.1)';

export const boxShadow = '0 0.4rem 2.4rem rgba(0, 0, 0, 0.25)';
export const boxShadow_2 = '0 0.4rem 2rem rgba(0, 0, 0, 0.12)';

export const mainBorder = `0.4rem solid ${colors.accent_orange}`;
export const darkBorder = `0.1rem solid ${colors.type_dark}`;

export const link = css`
  text-decoration: none;
  color: ${colors.accent_orange};
`;

export const title_01 = css`
  font-size: 5.2rem;
  line-height: 6.4rem;
  font-weight: 900;
`;

export const title_02 = css`
  font-size: 4rem;
  line-height: 4.8rem;
  letter-spacing: -0.022em;
  font-weight: 900;
`;

export const title_03 = css`
  font-size: 2.6rem;
  line-height: 3.5rem;
  letter-spacing: -0.022em;
  font-weight: 800;
`;

export const sectionTitle_1 = css`
  font-size: 5.2rem;
  line-height: 5.2rem;
  letter-spacing: -0.022em;
  font-weight: 900;
`;

export const sectionTitle_3 = css`
  font-size: 5.2rem;
  line-height: 7.1rem;
  letter-spacing: -0.022em;
  font-weight: 900;
`;

export const sectionTitle_4 = css`
  font-size: 2.2rem;
  line-height: 3rem;
  font-weight: 800;
  letter-spacing: -0.022em;
`;

export const body_01 = css`
  font-size: 2.4rem;
  line-height: 3.3rem;
  letter-spacing: -0.022em;
`;

export const body_02 = css`
  font-size: 2rem;
  line-height: 2.7rem;
  letter-spacing: -0.022em;
`;

export const body_03 = css`
  font-size: 1.8rem;
  line-height: 2.5rem;
  font-weight: 400;
  letter-spacing: -0.022em;
`;

export const body_04 = css`
  font-size: 2.4rem;
  line-height: 3.3rem;
  font-weight: 600;
`;

export const mainFont = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
  letter-spacing: 0.03rem;
`;

export const mainFontSmallSpacing = css`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
  letter-spacing: -0.022em;
`;

export const largeFont = css`
  font-size: 1.8rem;
  line-height: 2.5rem;
  letter-spacing: 0.03rem;
`;

export const mediaQueries = {
  mobile: 'screen and (min-width: 576px)',
  tablet: 'screen and (min-width: 768px)',
  laptop: 'screen and (min-width: 950px)',
  desktop: 'screen and (max-width: 1200px)'
};

export const input = css`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 0.6rem;
  padding: 1.2rem 0.8rem;
  color: ${colors.type_dark};
  border: 0.1rem solid ${colors.type_light_passive};
  height: 4.6rem;
  ${mainFont};

  &::placeholder {
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: ${colors.type_light_passive};
  }

  &:focus {
    outline: none;
    border-color: rgba(${colors.accent_orange}, 0.5);
  }
`;
