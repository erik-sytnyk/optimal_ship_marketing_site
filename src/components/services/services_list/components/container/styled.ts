import styled from 'styled-components';

import {colors, mediaQueries} from 'src/styles/shared';

export const container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isOdd ? colors.white : colors.gray_6)};

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
`;
