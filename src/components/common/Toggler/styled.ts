import styled, {css} from 'styled-components';

import Button from 'src/components/common/Button';

import {colors} from 'src/styles/shared';

export const button = styled(Button)`
  width: 3.3rem;
  height: 3.3rem;
  padding: 0;
  border-radius: 0.3rem;
  min-width: 3.3rem;
`;

export const arrow = styled.span`
  display: inline-block;
  transform: rotate(90deg);
  color: ${colors.white};

  &::before {
    content: '${props => (props.direction === 'top' ? '\\276E' : '\\276F')}';
  }
`;
