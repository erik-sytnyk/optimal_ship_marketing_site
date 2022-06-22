import styled from 'styled-components';

import Button from 'src/components/common/Button';
import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries, title_01, body_01, mainBorder} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 0;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 8.1rem 0 7rem 12.1rem;
  }
`;

export const content = styled.div`
  padding: 1.6rem 1.6rem 4rem;

  @media ${mediaQueries.tablet} {
    width: 47.8rem;
    padding: 0 0 1.6rem 1.6rem;
  }
`;

export const title = styled.div`
  ${title_01};
  margin-bottom: 4rem;
  white-space: pre-wrap;
`;

export const description = styled.div`
  ${body_01};
  margin-bottom: 4.4rem;
`;

export const button = styled(Button)`
  width: 100%;

  @media ${mediaQueries.tablet} {
    width: 34.1rem;
  }
`;

export const imagesContainer = styled.div`
  position: relative;
  height: 57.6rem;

  @media ${mediaQueries.tablet} {
    width: 71.2rem;
    height: 63.4rem;
  }
`;

export const imageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 15;
`;

export const rectangle = styled.div`
  display: none;

  @media ${mediaQueries.tablet} {
    display: block;
    position: absolute;
    height: 13.8rem;
    width: 13.8rem;
    bottom: 7.8rem;
    right: 18.3rem;
    border: ${mainBorder};
    z-index: 5;
  }
`;

export const tooltip = styled(Tooltip)`
  padding: 3.2rem 1.6rem 3.2rem 3.2rem;
  bottom: 0;
  right: 0;
  width: 95%;

  @media ${mediaQueries.tablet} {
    bottom: 0;
    left: 4rem;
    width: 45.7rem;
    padding: 2.2rem 3.2rem 4.2rem;
  }
`;
