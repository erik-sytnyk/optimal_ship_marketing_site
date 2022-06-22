import styled, {css} from 'styled-components';

import {colors, mainFont} from 'src/styles/shared';

export const button = styled.button`
  height: 4.6rem;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 0.6rem;
  border: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${colors.white};
  background: ${colors.accent_orange};
  padding: 0 3rem;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.15);
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
  ${mainFont};

  &:focus {
    outline: none;
  }
  &:hover {
    background: ${colors.accent_orange_light};
  }

  ${props =>
    props.outline &&
    css`
      background-color: transparent;
      border: 0.2rem solid ${colors.accent_orange};
      color: ${colors.accent_orange};
      box-shadow: none;

      &:hover {
        background-color: transparent;
      }
    `}

  ${props =>
    props.search &&
    css`
      position: absolute;
      right: 0;
      box-shadow: none;
    `}
`;
