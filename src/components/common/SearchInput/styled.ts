import styled from 'styled-components';

import {colors, mainFont} from 'src/styles/shared';

export const container = styled.div`
  display: flex;
  width: 30.9rem;
  position: relative;
`;

export const input = styled.input`
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
