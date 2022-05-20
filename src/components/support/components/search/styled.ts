import styled from 'styled-components';

import {mediaQueries, colors, mainFont} from 'src/styles/shared';

export const searchInput = styled.input`
  width: 100%;
  background: url(/images/search.png) no-repeat scroll;
  background-position: 95% 50%;
  background-color: ${colors.lists_grey};
  border-radius: 0.8rem;
  border: none;
  outline: none;
  ${mainFont};
  height: 7.8rem;
  padding-left: 2.9rem;
  margin-bottom: 2rem;

  ::placeholder {
    color: ${colors.type_light_passive};
  }

  @media ${mediaQueries.tablet} {
    background-position: 98% 50%;
  }
`;
