import styled from 'styled-components';

import {mainBorder, colors} from 'src/styles/shared';

export const external = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 12rem;
  border: ${mainBorder};
  border-radius: 50%;
`;

export const internal = styled.div`
  width: 10rem;
  height: 10rem;
  border: 0.2rem solid ${colors.accent_orange};
  border-radius: 50%;
`;
