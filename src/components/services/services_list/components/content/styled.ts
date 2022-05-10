import styled from 'styled-components';

import Button from 'src/components/common/Button';

import {sectionTitle_1, body_01} from 'src/styles/shared';

export const content = styled.div``;

export const title = styled.div`
  ${sectionTitle_1};
  margin-bottom: 4rem;
  white-space: pre-line;
`;

export const description = styled.div`
  ${body_01};
`;

export const button = styled(Button)`
  width: 100%;
  margin-top: 6rem;
`;
