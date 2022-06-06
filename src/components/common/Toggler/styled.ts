import styled, {css} from 'styled-components';

import Button from 'src/components/common/Button';

import {colors, togglerWidth} from 'src/styles/shared';

export const button = styled(Button)`
  width: ${togglerWidth};
  height: ${togglerWidth};
  padding: 0;
  border-radius: 0.3rem;
  min-width: ${togglerWidth};
  box-shadow: none;
`;

export const arrow = styled.span`
  display: inline-block;
  transform: ${props => (props.direction === 'top' || props.direction === 'down' ? 'rotate(90deg)' : 'rotate(0deg)')};
  color: ${colors.white};

  &::before {
    ${props =>
      (props.direction === 'top' || props.direction === 'left') &&
      css`
        content: '\\276E';
      `};

    ${props =>
      (props.direction === 'down' || props.direction === 'right') &&
      css`
        content: '\\276F';
      `};
  }
`;
