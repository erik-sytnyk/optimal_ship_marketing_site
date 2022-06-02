import styled from 'styled-components';

import Wave from 'src/components/common/Wave';
import Tooltip from 'src/components/common/Tooltip';

import {colors, mediaQueries, body_01, title_01, body_04} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const content = styled.div`
  margin: 3.2rem 1.6rem;
  width: auto;

  @media ${mediaQueries.tablet} {
    margin: 8rem 0 9.2rem 13.5rem;
    width: 45.8rem;
  }
`;

export const title = styled.div`
  ${title_01};
  margin-bottom: 4rem;
  white-space: pre-line;
`;

export const subtitle = styled.div`
  ${body_04};
  margin-bottom: 4rem;
`;

export const listHeader = styled.div`
  ${body_01};
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const list = styled.ul`
  ${body_01}
  padding-left: 3rem;
`;

export const imagesWrapper = styled.div`
  position: relative;
  margin-bottom: 3.2rem;
  width: 100%;
  height: 63.9rem;

  @media ${mediaQueries.tablet} {
    margin: 4rem 0 5.2rem;
    width: 71.3rem;
    height: 72.4rem;
  }
`;

export const imagesContainer = styled.div`
  position: absolute;
  top: 2.5rem;
  z-index: 10;

  @media ${mediaQueries.tablet} {
    width: 59.3rem;
    bottom: 4.4rem;
    right: 0;
  }
`;

export const wave = styled(Wave)`
  width: 10.1rem;
  height: 2.9rem;

  @media ${mediaQueries.tablet} {
    width: 16rem;
    height: 4.8rem;
  }
`;

export const waveTop = styled(wave)`
  top: 2.9rem;
  left: -5.9rem;

  @media ${mediaQueries.tablet} {
    top: 4.6rem;
    left: -9.3rem;
  }
`;

export const waveBottom = styled(wave)`
  bottom: 2.1rem;
  right: 0;

  @media ${mediaQueries.tablet} {
    bottom: 3.4rem;
    right: -6rem;
  }
`;

export const rectangle = styled.div`
  position: absolute;
  background: ${colors.bg_accent_orange};
  width: 32.4rem;
  height: 13rem;
  top: 0;
  left: -2.5rem;

  @media ${mediaQueries.tablet} {
    width: 49.7rem;
    height: 20.5rem;
    top: 0;
    left: 8rem;
  }
`;

export const tooltip = styled(Tooltip)`
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 34rem;
  padding: 3.2rem 0 2.4rem;
  background-color: rgba(#363740, 0.96);
  z-index: 30;

  .quote {
    margin: 0 3rem 3.2rem 3.4rem;
  }
  .author {
    margin-left: 3rem;
  }

  @media ${mediaQueries.tablet} {
    left: 0;
    bottom: 0;
    margin: 0;
  }
`;
