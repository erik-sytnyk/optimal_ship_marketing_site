import styled from 'styled-components';

import Button from 'src/components/common/Button';

import {body_01, colors, mediaQueries, title_01, darkBorder} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.lists_grey};
  padding: 6rem 1.6rem 5.2rem;

  @media ${mediaQueries.tablet} {
    padding: 8rem 0 4.8rem;
  }
`;

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${mediaQueries.tablet} {
    width: 45.7rem;
  }
`;

export const title = styled.div`
  ${title_01};
  margin-bottom: 4rem;
  white-space: pre-line;
  text-align: center;

  @media ${mediaQueries.tablet} {
    white-space: normal;
  }
`;

export const description = styled.div`
  ${body_01};
  text-align: center;
  margin-bottom: 3.6rem;
`;

export const button = styled(Button)`
  width: 22.2rem;
`;

export const divider = styled.div`
  display: flex;
  align-items: center;
  height: 3.3rem;
  ${body_01};
  margin: 4rem 0 2.4rem;
  width: 100%;

  & span {
    margin: 0 1.8rem;
  }
  & div {
    width: 100%;
    border-bottom: ${darkBorder};
  }
`;
