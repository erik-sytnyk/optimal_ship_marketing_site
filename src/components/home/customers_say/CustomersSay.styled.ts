import styled, {css} from 'styled-components';

import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries, colors, mainBorder, title_01, mainFont} from 'src/styles/shared';

export const wrapper = styled.div`
  background-color: ${colors.lists_grey};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 7rem 0 7.6rem;

  @media ${mediaQueries.tablet} {
    padding: 8rem 0 5.2rem;
  }
`;

export const imagesContainer = styled.div`
  position: relative;
  height: 60.7rem;
  width: 100%;

  @media ${mediaQueries.tablet} {
    height: 52.8rem;
    width: initial;
  }
`;

export const imageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 43.8rem;
  z-index: 20;

  @media ${mediaQueries.tablet} {
    width: max-content;
    height: initial;
  }
`;

export const rectangle = styled.div`
  position: absolute;
  top: 5rem;
  height: 42.8rem;
  width: 100%;
  border: ${mainBorder};
  border-right: none;
  border-left: none;
  z-index: 10;

  @media ${mediaQueries.tablet} {
    top: 4rem;
    left: 14rem;
    width: 61.1rem;
    border: ${mainBorder};
  }
`;

export const tooltip = styled(Tooltip)`
  width: 34.3rem;
  top: 5.6rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 3.2rem 1.6rem 4.8rem;
  z-index: 30;

  .author {
    margin-top: 3rem;
  }

  @media ${mediaQueries.tablet} {
    top: 8rem;
    left: 37.2rem;
    width: 45.9rem;
    padding: 3.2rem 2.8rem 3.2rem 3.2rem;
    margin: 0;

    .author {
      margin-top: 1.2rem;
    }
  }
`;

export const tooltipToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
`;

export const toolbarLink = styled.a`
  cursor: pointer;
`;

export const toolbarArrow = styled.span`
  border: solid ${colors.white};
  border-width: 0 0.2rem 0.2rem 0;
  display: inline-block;
  padding: 0.5rem;

  ${props =>
    props.position === 'left' &&
    css`
      transform: rotate(135deg);
    `}

  ${props =>
    props.position === 'right' &&
    css`
      transform: rotate(-45deg);
    `}
`;

export const content = styled.div`
  width: min-content;
  margin: 0 auto;
  padding-top: 4.2rem;

  @media ${mediaQueries.tablet} {
    width: 38.6rem;
    margin: 8.1rem 13.5rem 0 0;
    padding-top: 0;
  }
`;

export const title = styled.div`
  white-space: pre-line;
  margin-bottom: 3.2rem;
  ${title_01};

  @media ${mediaQueries.tablet} {
    margin-bottom: 6.4rem;
  }
`;

export const link = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: ${colors.accent_orange};
  ${mainFont};
`;
