import styled from 'styled-components';
import Image from 'next/image';

import Button from 'src/components/common/Button';

import {
  mediaQueries,
  mainBorder,
  colors,
  boxShadow,
  sectionTitle_3,
  body_01,
  sectionTitle_1,
  mainFontSmallSpacing
} from 'src/styles/shared';

const MARGIN = '7rem';

export const wrapper = styled.div`
  position: relative;

  @media ${mediaQueries.tablet} {
    height: 83rem;
    margin: ${MARGIN} 0;
  }
`;

export const background = styled(Image)`
  display: none !important;

  @media ${mediaQueries.tablet} {
    display: initial !important;
  }
`;

export const backgroundMobile = styled(Image)`
  @media ${mediaQueries.tablet} {
    display: none !important;
  }
`;

export const rectangleTop = styled.div`
  display: none;

  @media ${mediaQueries.tablet} {
    display: initial;
    position: absolute;
    border: ${mainBorder};
    width: 28rem;
    height: 57.7rem;
    left: 13.5rem;
    top: -${MARGIN};
  }
`;

export const rectangleBottom = styled.div`
  display: none;

  @media ${mediaQueries.tablet} {
    display: initial;
    position: absolute;
    border: ${mainBorder};
    width: 28.1rem;
    height: 43.3rem;
    left: 49.4rem;
    bottom: -${MARGIN};
  }
`;

export const content = styled.div`
  padding: 6rem 1.6rem 2rem;

  @media ${mediaQueries.tablet} {
    position: absolute;
    width: 58rem;
    height: 91rem;
    top: -4rem;
    left: 16.5rem;
    background-color: ${colors.white};
    box-shadow: ${boxShadow};
    padding: 6rem 4rem 4.7rem 4.2rem;
  }
`;

export const title = styled.div`
  ${sectionTitle_1};
  margin-bottom: 4rem;

  @media ${mediaQueries.tablet} {
    ${sectionTitle_3};
  }
`;

export const item = styled.div`
  display: flex;
  margin-bottom: 2.4rem;
  align-items: center;
`;

export const text = styled.div`
  ${mainFontSmallSpacing};
  margin-left: 1.6rem;
  flex: 1;

  @media ${mediaQueries.tablet} {
    ${body_01};
    margin-left: 2.7rem;
  }
`;

export const buttonContainer = styled.div`
  margin-top: 3.6rem;

  @media ${mediaQueries.tablet} {
    display: flex;
    justify-content: center;
    margin-top: 8rem;
  }
`;

export const button = styled(Button)`
  width: 100%;

  @media ${mediaQueries.tablet} {
    width: 38.4rem;
  }
`;
