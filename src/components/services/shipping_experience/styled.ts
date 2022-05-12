import styled from 'styled-components';

import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries, sectionTitle_1, body_01, boxShadow} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 6rem 0 8rem 13.5rem;
  }
`;

export const content = styled.div`
  margin: 3.2rem 1.6rem;

  @media ${mediaQueries.tablet} {
    margin-top: 2rem;
    max-width: 57.7rem;
  }
`;

export const title = styled.div`
  ${sectionTitle_1};
  margin-bottom: 4rem;

  @media ${mediaQueries.tablet} {
    white-space: pre-line;
  }
`;

export const description = styled.div`
  ${body_01};
`;

export const imageWrapper = styled.div`
  position: relative;
  height: 102.7rem;

  @media ${mediaQueries.tablet} {
    height: auto;
  }
`;

export const tooltip = styled(Tooltip)`
  top: 24rem;
  width: 37.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 2.8rem 3.2rem;

  @media ${mediaQueries.tablet} {
    right: 7.2rem;
    top: 4.7rem;
    left: auto;
    margin: 0;
    width: 52.1rem;
    padding: 3.2rem;
    box-shadow: ${boxShadow};
  }
`;
