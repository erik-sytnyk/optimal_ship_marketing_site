import styled from 'styled-components';

import Wave from 'src/components/common/Wave';
import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries, darkBorder, body_01, sectionTitle_1, colors, dropShadow} from 'src/styles/shared';

export const storyContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const content = styled.div`
  padding: 3.2rem 1.6rem;

  @media ${mediaQueries.tablet} {
    width: 57.7rem;
    padding: 8rem 0 6rem 13.5rem;
  }
`;

export const title = styled.div`
  ${sectionTitle_1};
  white-space: pre-line;
`;

export const description = styled.div`
  ${body_01};
  margin-top: 4rem;
`;

export const imagesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 102.9rem;

  @media ${mediaQueries.tablet} {
    width: 59.3rem;
    height: 101.8rem;
  }
`;

export const imageContainer = styled.div`
  position: absolute;
  top: 3rem;
  z-index: 10;

  @media ${mediaQueries.tablet} {
    right: 0;
    top: 6rem;
    width: auto;
  }
`;

export const tooltip = styled(Tooltip)`
  width: 34.8rem;
  padding: 3.2rem 3.6rem 4rem 3.3rem;
  top: 11rem;
  left: 0;
  right: 0;
  margin: 0 auto;

  .quote {
    margin-bottom: 1.6rem;
  }

  @media ${mediaQueries.tablet} {
    left: 0;
    top: 14rem;
    margin: 0;
  }
`;

export const rectangle = styled.div`
  position: absolute;
  width: 79%;
  height: 20.5rem;
  top: 0;
  right: 0;
  background-color: ${colors.bg_accent_orange};
  z-index: 5;

  @media ${mediaQueries.tablet} {
    width: 35.6rem;
    top: 3rem;
  }
`;

export const waveTop = styled(Wave)`
  width: 5.5rem;
  right: 0;
  top: 8.1rem;
  z-index: 15;

  @media ${mediaQueries.tablet} {
    width: 11.5rem;
    top: 55.6rem;
  }
`;

export const waveBottom = styled(Wave)`
  width: 11rem;
  top: 53.5rem;
  left: 0;

  @media ${mediaQueries.tablet} {
    width: 16rem;
    top: 89.4rem;
    left: 15.7rem;
  }
`;

export const remarkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4.8rem;
  padding: 0 1.6rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 6rem;
    padding: 0;
  }
`;

export const remark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80rem;
  height: 17.9rem;
  border-top: ${darkBorder};
  border-bottom: ${darkBorder};
  text-align: center;
  ${body_01};
  font-weight: 700;

  @media ${mediaQueries.tablet} {
    width: 80rem;
    height: 14.6rem;
    padding: 0 13rem;
  }
`;

// statistics

export const statistics = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 25;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 6.4rem 0 4.8rem;
  background-color: ${colors.white};

  @media ${mediaQueries.tablet} {
    bottom: 0;
    right: 1.6rem;
    width: 34rem;
    box-shadow: ${dropShadow};
  }
`;

export const statisticsText = styled.span`
  ${body_01};
  font-weight: 700;
`;

export const successNumber = styled.div`
  margin: 1rem 0;
  font-size: 5.6rem;
  line-height: 4.8rem;
  letter-spacing: -0.022em;
  font-weight: 900;
  color: ${colors.accent_orange};
`;

export const divider = styled.div`
  border-bottom: ${darkBorder};
  width: 14rem;
  margin: 2.4rem auto;
`;
