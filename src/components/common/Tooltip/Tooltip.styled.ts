import styled from 'styled-components';

import {colors} from 'src/styles/shared';

export const container = styled.div`
  position: absolute;
  background-color: ${colors.type_dark};
  box-shadow: 2rem 2rem 3rem rgba(0, 0, 0, 0.16);
  z-index: 20;
`;

export const quote = styled.div`
  margin-bottom: 2.4rem;
  color: ${colors.white};
  font-family: 'Nunito Sans Italic';
  font-size: 2.1rem;
  line-height: 2.9rem;
  letter-spacing: -0.022em;
`;

export const author = styled.div`
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.2rem;
  letter-spacing: -0.022em;
  color: ${colors.accent_orange};
  white-space: pre-line;
`;
