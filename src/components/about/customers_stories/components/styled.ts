import styled, {css} from 'styled-components';

import Button from 'src/components/common/Button';

import {mediaQueries, colors, title_02, sectionTitle_3, body_01, dropShadow} from 'src/styles/shared';

export const wrapper = styled.div`
  box-shadow: ${dropShadow};
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 34.3rem;
  margin: 0 0 1.6rem;

  ${props =>
    props.isOdd &&
    css`
      flex-direction: column-reverse;
    `}

  @media ${mediaQueries.tablet} {
    width: 61.6rem;
    height: max-content;
    margin: 0 3rem 8rem;

    ${props =>
      props.isOdd &&
      css`
        flex-direction: column;
        margin: 8rem 3rem 0;
      `}
  }
`;

export const content = styled.div`
  padding: 4rem 1.6rem 3.6rem;

  @media ${mediaQueries.tablet} {
    padding: 8rem 8rem 6rem 6.4rem;
  }
`;

export const title = styled.div`
  ${title_02};
  margin-bottom: 4rem;

  @media ${mediaQueries.tablet} {
    ${sectionTitle_3};
    white-space: pre-line;
  }
`;

export const description = styled.div`
  ${body_01};
  margin-bottom: 3.6rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 6rem;
  }
`;

export const button = styled(Button)`
  width: 100%;

  @media ${mediaQueries.tablet} {
    width: 25.6rem;
  }
`;
