import styled, {css} from 'styled-components';

import Button from 'src/components/common/Button';

import {mediaQueries, colors, boxShadow_2, title_02, body_02, mainFont, input as inputStyles} from 'src/styles/shared';

export const form = styled.div`
  width: 100%;

  @media ${mediaQueries.tablet} {
    width: 57.7rem;
    background: ${colors.white};
    box-shadow: ${boxShadow_2};
    padding: 3.2rem 2.6rem 4rem;
  }
`;

export const header = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12.4rem;
  position: relative;

  @media ${mediaQueries.tablet} {
    align-items: flex-end;
    margin-bottom: 3.5rem;
  }
`;

export const title = styled.div`
  ${title_02};
  margin-bottom: 1.2rem;

  @media ${mediaQueries.tablet} {
    margin-right: 3.2rem;
  }
`;

export const description = styled.div`
  ${body_02};
`;

export const imageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 6rem;

  @media ${mediaQueries.tablet} {
    position: initial;
  }
`;

export const row = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: auto;
  }
`;

export const fullRow = styled.div`
  width: 100% !important;
`;

export const label = styled.div`
  ${mainFont};
  font-weight: 700;
  margin-bottom: 0.8rem;

  & span {
    color: ${colors.accent_orange};
  }
`;

export const input = styled.input`
  width: 16.8rem;
  margin-bottom: 4rem;
  ${inputStyles};

  @media ${mediaQueries.tablet} {
    width: 23.7rem;
  }
`;

export const select = styled.select`
  ${inputStyles};
  margin-bottom: 4rem;
  width: 100%;
`;

export const textArea = styled.textarea`
  ${inputStyles};
  margin-bottom: 4rem;
  height: 15rem;
  width: 100%;
`;

export const footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const button = styled(Button)`
  margin: 2rem 0;
  width: 22.1rem;

  ${props =>
    props.disabled &&
    css`
      background-color: ${colors.accent_orange_disabled}!important;
      box-shadow: none;
      cursor: initial;
    `}
`;

export const remark = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: -0.022em;
  color: ${colors.gray_2};
`;
