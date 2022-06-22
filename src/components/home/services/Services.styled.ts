import styled, {css} from 'styled-components';

import Circles from 'src/components/common/Circles';
import Wave from 'src/components/common/Wave';
import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries, colors, body_02, title_01, body_01, mainBorder} from 'src/styles/shared';

export const wrapper = styled.div`
  background-color: ${colors.lists_grey};
  margin: 0;

  @media ${mediaQueries.tablet} {
    margin: 0 4.9rem;
  }
`;

// common

export const serviceRow = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${props =>
    props.index === 0 &&
    css`
      margin-bottom: 0;

      @media ${mediaQueries.tablet} {
        align-items: flex-end;
        margin-bottom: 8rem;
      }
    `}

  ${props =>
    props.index === 1 &&
    css`
      flex-direction: column-reverse;
      margin-bottom: 0;

      @media ${mediaQueries.tablet} {
        align-items: flex-start;
        margin-bottom: 2.9rem;
      }
    `}

    ${props =>
    props.index === 2 &&
    css`
      flex-direction: column;
      margin-bottom: 0;

      @media ${mediaQueries.tablet} {
        align-items: center;
        margin-bottom: 8rem;
      }
    `}

    ${props =>
    props.index === 3 &&
    css`
      flex-direction: column-reverse;

      @media ${mediaQueries.tablet} {
        align-items: center;
      }
    `}
`;

export const ImagesContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: absolute;
  z-index: 10;

  @media ${mediaQueries.tablet} {
    width: auto !important;
  }
`;

export const Rectangle = styled.div`
  position: absolute;
  border: ${mainBorder};
  z-index: 5;

  @media ${mediaQueries.tablet} {
    border: ${mainBorder}!important;
  }
`;

// service content

export const content = styled.div`
  padding: 6rem 0 0 0;
  width: 100%;

  @media ${mediaQueries.tablet} {
    padding: 6rem 7rem;
    width: 63rem;
  }
`;

export const contentContainer = styled.div`
  padding: 0 1.6rem 2rem;
`;

export const header = styled.div`
  margin-bottom: 1.6rem;
  text-transform: uppercase;
  color: ${colors.dark_hover};
  ${body_02};
  font-weight: 900;

  @media ${mediaQueries.tablet} {
    margin-bottom: 3.2rem;
  }
`;

export const title = styled.div`
  margin-bottom: 3.2rem;
  white-space: pre-line;
  ${title_01};

  @media ${mediaQueries.tablet} {
    margin-bottom: 4rem;
  }
`;

export const description = styled.div`
  margin-bottom: 3.6rem;
  ${body_01};

  @media ${mediaQueries.tablet} {
    margin-bottom: 4.4rem;
  }
`;

// preparation tool

export const preparationImagesContainer = styled(ImagesContainer)`
  height: 64rem;
  margin-top: 1.6rem;
  margin-right: 0;

  @media ${mediaQueries.tablet} {
    width: 57.7rem;
    margin-top: 0;
    margin-right: 8.6rem;
  }
`;

export const preparationImageContainer = styled(ImageContainer)`
  top: 0;
  right: 0;
  width: 87%;

  @media ${mediaQueries.tablet} {
    top: 4rem;
    right: 0;
  }
`;

export const preparationRectangle = styled(Rectangle)`
  height: 52.8rem;
  width: 100%;
  top: 2rem;
  border-left: none;
  border-right: none;

  @media ${mediaQueries.tablet} {
    width: 52.6rem;
    top: 6rem;
    left: 0;
  }
`;

export const preparationCircles = styled(Circles)`
  display: none;

  @media ${mediaQueries.tablet} {
    position: absolute;
    display: flex;
    top: 0;
    right: 4rem;
    z-index: 20;
  }
`;

export const preparationTooltip = styled(Tooltip)`
  padding: 3.2rem 1.5rem 2.4rem 3rem;
  width: 95%;
  bottom: 0;
  right: 0;

  @media ${mediaQueries.tablet} {
    padding: 3.2rem 3rem;
    width: 42rem;
    bottom: 0;
    right: 8.9rem;
  }
`;

// quote tool

export const quoteImagesContainer = styled(ImagesContainer)`
  height: 55rem;
  margin-left: 0;

  @media ${mediaQueries.tablet} {
    width: 63.2rem;
    margin-left: 3.2rem;
  }
`;

export const quoteImageContainer = styled(ImageContainer)`
  right: 0;
  top: 2.5rem;
  width: 95%;
`;

export const quoteRectangle = styled(Rectangle)`
  height: 36.3rem;
  width: 30rem;
  top: 0;
  right: 0;
  border-right: none;

  @media ${mediaQueries.tablet} {
    width: 36.3rem;
    right: 2rem;
  }
`;

export const quoteWave = styled(Wave)`
  right: 0;
  bottom: 3.8rem;
  width: 12rem;
  height: 4.8rem;
  z-index: 15;

  @media ${mediaQueries.tablet} {
    right: 15.7rem;
    bottom: 3.8rem;
    width: 16rem;
    height: 4.8rem;
  }
`;

export const quoteTooltip = styled(Tooltip)`
  padding: 3.2rem 1rem 3.2rem 1.6rem;
  width: 100%;
  top: 11.4rem;

  @media ${mediaQueries.tablet} {
    padding: 3.2rem;
    width: 42.4rem;
    left: 0;
    top: 15.4rem;
  }
`;

// bill pay tool

export const billPayImagesContainer = styled(ImagesContainer)`
  height: 75.9rem;
  margin-left: 0;
  margin-top: 2.4rem;

  @media ${mediaQueries.tablet} {
    width: 63.2rem;
    height: 64.7rem;
    margin-right: 3rem;
    margin-top: 0;
  }
`;

export const billPayImageContainer = styled(ImageContainer)`
  width: auto;

  @media ${mediaQueries.tablet} {
    top: 0;
    left: 0;
  }
`;

export const billPayRectangle = styled(Rectangle)`
  height: 36.3rem;
  width: 33.1rem;
  bottom: 0;
  right: 0;
  border-right: none;

  @media ${mediaQueries.tablet} {
    width: 36.3rem;
    right: 12.9rem;
  }
`;

export const billPayCircles = styled(Circles)`
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 15;

  @media ${mediaQueries.tablet} {
    top: 3.9rem;
    right: 4.1rem;
  }
`;

export const billPayTooltip = styled(Tooltip)`
  position: absolute;
  right: 0;
  bottom: 1.6rem;
  padding: 3.2rem 1.8rem 3.2rem 2.8rem;
  width: 95%;

  @media ${mediaQueries.tablet} {
    width: 47.2rem;
    padding: 4.2rem 3rem 3.2rem;
  }
`;

// pickup tool

export const pickupImagesContainer = styled(ImagesContainer)`
  height: 66.1rem;
  margin-left: 0;
  margin-top: 2.4rem;
  margin-bottom: 6rem;

  @media ${mediaQueries.tablet} {
    width: 57.5rem;
    height: 60.4rem;
    margin-left: 8.8rem;
    margin-top: 0;
    margin-bottom: 13.6rem;
  }
`;

export const pickupImageContainer = styled(ImageContainer)`
  width: auto;

  @media ${mediaQueries.tablet} {
    top: 0;
    left: 0;
  }
`;

export const pickupRectangle = styled(Rectangle)`
  height: 36.3rem;
  width: 33.1rem;
  bottom: 0;
  right: 0;
  border-right: none;

  @media ${mediaQueries.tablet} {
    width: 36.3rem;
    right: 11.9rem;
  }
`;

export const pickupWave = styled(Wave)`
  right: 0;
  top: 3.2rem;
  width: 12rem;
  height: 4.8rem;
  z-index: 15;

  @media ${mediaQueries.tablet} {
    width: 16rem;
    right: 2rem;
  }
`;

export const pickupTooltip = styled(Tooltip)`
  position: absolute;
  left: 0;
  bottom: 4rem;
  padding: 3.2rem 2.8rem 3.2rem 1.8rem;
  width: 95%;

  .author {
    white-space: normal;
  }

  @media ${mediaQueries.tablet} {
    width: 44.2rem;
    padding: 3.2rem 3rem;
    right: 0;
    left: auto;
    bottom: 4rem;

    .author {
      white-space: pre-line;
    }
  }
`;
