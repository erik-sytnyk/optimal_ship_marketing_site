import styled from 'styled-components';

import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries, colors} from 'src/styles/shared';

export const wrapper = styled.div`
  padding: 2rem 0 8rem;

  @media ${mediaQueries.tablet} {
    padding-top: 4rem;
  }
`;

// first story

export const firstStory = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 45rem;

  @media ${mediaQueries.tablet} {
    margin-left: 8.68%;
    margin-bottom: 4rem;
    width: 87rem;
    height: 38.7rem;
  }
`;

export const firstStoryTooltip = styled(Tooltip)`
  padding: 3.2rem;
  box-shadow: none;
  width: 35.9rem;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  .quote {
    margin-bottom: 1.6rem;
  }

  @media ${mediaQueries.tablet} {
    left: 2.4rem;
    right: initial;
    width: 49.4rem;
    height: 36.3rem;
    margin: initial;
  }
`;

export const firstStoryImage = styled.div`
  @media ${mediaQueries.tablet} {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 20;
  }

  @media ${mediaQueries.laptop} {
    display: none;
  }
`;

export const firstStoryRectangle = styled.div`
  background: ${colors.bg_accent_orange};
  position: absolute;
  width: 100%;
  height: 35.5rem;
  top: 3.2rem;

  @media ${mediaQueries.tablet} {
    left: 0;
    bottom: 0;
    top: initial;
    width: 83rem;
  }
`;

// second story

export const secondStory = styled.div`
  position: relative;
  height: 70.3rem;

  @media ${mediaQueries.tablet} {
    margin-right: 8.68%;
    margin-bottom: 4rem;
    width: 106.1rem;
    height: 39.3rem;
    float: right;
  }
`;

export const secondStoryTooltip = styled(Tooltip)`
  box-shadow: none;
  width: 35.9rem;
  height: 67.3rem;
  top: 3rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 3.2rem;

  .quote {
    margin-bottom: 1.6rem;
  }

  @media ${mediaQueries.tablet} {
    left: initial;
    right: 0;
    width: 70.9rem;
    height: 36.3rem;
    padding: 3.2rem 3.2rem 3.2rem 2.3rem;
  }
`;

export const secondStoryImage = styled.div`
  @media ${mediaQueries.tablet} {
    position: absolute;
    top: 3rem;
    left: 0;
    z-index: 20;
  }

  @media ${mediaQueries.laptop} {
    display: none;
  }
`;

export const secondStoryRectangle = styled.div`
  background: ${colors.bg_accent_orange};
  position: absolute;
  height: 34.7rem;
  width: 100%;

  @media ${mediaQueries.tablet} {
    top: 0;
    right: 3rem;
    width: 90.3rem;
  }
`;

// third story

export const thirdStory = styled.div`
  position: relative;
  height: 33.6rem;

  @media ${mediaQueries.tablet} {
    margin-right: 16.875%;
    width: 74.5rem;
    float: right;
    margin-bottom: 10rem;
  }
`;

export const thirdStoryTooltip = styled(Tooltip)`
  box-shadow: none;
  width: 35.9rem;
  height: 33rem;
  top: 3rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 3.2rem;

  .quote {
    margin-bottom: 1.6rem;
  }

  @media ${mediaQueries.tablet} {
    left: initial;
    margin: initial;
    width: 47.2rem;
    height: 27.6rem;
  }
`;

export const thirdStoryImage = styled.div`
  @media ${mediaQueries.tablet} {
    position: absolute;
    top: 3rem;
    left: 0;
    z-index: 20;
  }

  @media ${mediaQueries.laptop} {
    display: none;
  }
`;

export const thirdStoryRectangle = styled.div`
  background: ${colors.bg_accent_orange};
  position: absolute;
  width: 100%;
  top: 6rem;
  bottom: 0;

  @media ${mediaQueries.tablet} {
    width: 63.6rem;
    height: 33.6rem;
    top: 0;
    left: 4.9rem;
  }
`;
