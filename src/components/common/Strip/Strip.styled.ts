import styled, {css} from 'styled-components';

import {colors, darkBorder, mediaQueries} from 'src/styles/shared';

const PADDING = '1.4rem';

export const wrapper = styled.div`
  background-color: ${colors.bg_grey};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 2.8rem;
  line-height: 5.2rem;
  letter-spacing: -0.022em;
  font-weight: 800;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    ${props =>
      props.page === 'about' &&
      css`
        padding: 8rem 0;
      `}

    ${props =>
      props.page === 'careers' &&
      css`
        padding: 5rem 0;
      `}
  }
`;

export const container = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  width: 8rem;
  padding: 5rem 0;
  border-bottom: ${darkBorder};

  :first-child {
    padding-top: 4rem;
  }
  :last-child {
    border: none;
    padding-bottom: 4rem;
  }

  @media ${mediaQueries.tablet} {
    width: auto;
    border-right: ${darkBorder};
    border-bottom: none;

    :first-child {
      padding-top: ${PADDING};
    }
    :last-child {
      padding-bottom: ${PADDING};
    }

    ${props =>
      props.page === 'about' &&
      css`
        padding: ${PADDING} 5rem;
      `}

    ${props =>
      props.page === 'careers' &&
      css`
        padding: ${PADDING} 8rem;
      `}
  }
`;
