import styled from 'styled-components';

import Button from 'src/components/common/Button';

import {colors, dropShadow, sectionTitle_4, body_02} from 'src/styles/shared';

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 32rem;
  min-height: 40.2rem;
  margin: 0 0.8rem 2.4rem;
  padding: 3.2rem 3rem 3.6rem;
  background-color: ${colors.white};
  box-shadow: ${dropShadow};
`;

export const title = styled.div`
  margin-bottom: 1.6rem;
  ${sectionTitle_4};
`;

export const description = styled.div`
  ${body_02};
`;

export const button = styled(Button)`
  min-width: 19.4rem;
  padding: 0 4rem;
`;
