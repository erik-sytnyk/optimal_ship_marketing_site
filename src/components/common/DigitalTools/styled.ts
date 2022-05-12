import styled from 'styled-components';

import Button from 'src/components/common/Button';

import {mediaQueries, colors, title_02} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${colors.lists_grey};
  padding: 6rem 0 5.4rem;

  @media ${mediaQueries.tablet} {
    padding: 6rem 0;
  }
`;

export const title = styled.div`
  ${title_02};
  margin-bottom: 2.4rem;
  text-align: center;

  @media ${mediaQueries.tablet} {
    margin-bottom: 6rem;
  }
`;

export const container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2.8rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 3.6rem;
  }
`;

export const button = styled(Button)`
  width: 29.6rem;
`;
