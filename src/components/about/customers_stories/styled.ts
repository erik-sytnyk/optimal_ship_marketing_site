import styled from 'styled-components';
import Image from 'next/image';

import Circles from 'src/components/common/Circles';
import Wave from 'src/components/common/Wave';
import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries, colors, sectionTitle_1, body_01} from 'src/styles/shared';

export const wrapper = styled.div`
  background-color: ${colors.gray_6};
`;

export const headerContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  min-height: 101.5rem;

  @media ${mediaQueries.tablet} {
    min-height: auto;
  }
`;

export const image = styled(Image)`
  margin-bottom: 4.8rem !important;

  @media ${mediaQueries.tablet} {
    margin-bottom: 3.5rem !important;
  }
`;

export const content = styled.div`
  position: absolute;
  top: 6rem;
  right: 0;
  left: 0;
  margin: 0 1.6rem;
  color: ${colors.white};

  @media ${mediaQueries.tablet} {
    width: 45.8rem;
    left: 13.6rem;
    bottom: 7.5rem;
    top: auto;
  }
`;

export const title = styled.div`
  ${sectionTitle_1};
  margin-bottom: 4rem;
`;

export const description = styled.div`
  ${body_01};
  font-weight: 600;
`;

export const list = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4rem;

  @media ${mediaQueries.tablet} {
    margin-top: 12.1rem;
  }
`;

export const buttonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 4.4rem 0 6rem;

  @media ${mediaQueries.tablet} {
    padding: 6rem 0;
  }
`;

export const circles = styled(Circles)`
  position: absolute;
  top: 53rem;
  left: -6rem;

  @media ${mediaQueries.tablet} {
    right: 46.7rem;
    bottom: 26.4rem;
    top: auto;
    left: auto;
  }
`;

export const wave = styled(Wave)`
  width: 10rem;
  right: 0rem;
  bottom: 0;

  @media ${mediaQueries.tablet} {
    right: 13.6rem;
    bottom: 7.5rem;
  }
`;

export const tooltip = styled(Tooltip)`
  width: 37.5rem;
  left: 0;
  right: 0;
  top: 56rem;
  margin: 0 auto;
  padding: 2.8rem 1.6rem 3.2rem;

  .quote {
    font-size: 3.6rem;
    line-height: 4rem;
    letter-spacing: -0.022em;
    font-weight: 400;
  }

  @media ${mediaQueries.tablet} {
    width: 41.6rem;
    right: 15.5rem;
    top: auto;
    left: auto;
    bottom: 0;
    margin: 0;
    padding: 2.8rem 2.8rem 3.2rem;
  }
`;
