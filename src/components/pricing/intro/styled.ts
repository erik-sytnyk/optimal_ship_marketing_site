import styled from 'styled-components';

import {mediaQueries, body_01, sectionTitle_1, sectionTitle_3} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 6rem 1.6rem 6rem 13.5rem;
  }
`;

export const content = styled.div`
  width: 100%;
  padding: 3.2rem 1.6rem 2.4rem;

  @media ${mediaQueries.tablet} {
    width: 57.7rem;
    padding: 0;
  }
`;

export const title = styled.div`
  ${sectionTitle_1};
  margin-bottom: 4rem;

  @media ${mediaQueries.tablet} {
    ${sectionTitle_3};
    white-space: pre-line;
  }
`;

export const subtitle = styled.div`
  ${body_01};
  font-weight: 700;
  margin-bottom: 4rem;
`;

export const description = styled.div`
  ${body_01};

  @media ${mediaQueries.tablet} {
  }
`;

export const imageBlock = styled.div`
  position: relative;
  width: 100%;
  min-height: 28.2rem;
  max-height: 45rem;

  @media ${mediaQueries.tablet} {
    width: 58.8rem;
    height: 61rem;
    min-height: initial;
    max-height: initial;
  }
`;

export const quoteImageWrapper = styled.div`
  position: absolute;
  z-index: 20;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 34.3rem;

  @media ${mediaQueries.tablet} {
    width: auto;
    top: 6rem;
    left: 0;
    transform: none;
  }
`;

export const backgroundImageWrapper = styled.div`
  position: initial;
  z-index: 10;

  @media ${mediaQueries.tablet} {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
