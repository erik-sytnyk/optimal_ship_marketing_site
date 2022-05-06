import styled from 'styled-components';

import Button from 'src/components/common/Button';

import {mediaQueries, colors, body_02, sectionTitle_1, body_01} from 'src/styles/shared';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 3rem;

  @media ${mediaQueries.tablet} {
    justify-content: center;
    align-items: center;
    padding: 6rem 11.2rem 0 5.1rem;
  }
`;

export const contentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
`;

export const content = styled.div`
  width: 100%;
  padding: 4rem 1.6rem 3rem;

  @media ${mediaQueries.tablet} {
    width: 66.1rem;
    padding: 6rem 10.1rem 6rem 7rem;
  }
`;

export const title = styled.div`
  ${body_02};
  font-weight: 900;
  color: ${colors.dark_hover};
  margin-bottom: 2.4rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 4rem;
  }
`;

export const subtitle = styled.div`
  ${sectionTitle_1};
  white-space: pre-line;
  margin-bottom: 2.4rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 4rem;
  }
`;

export const description = styled.div`
  ${body_01};
  margin-bottom: 4.4rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 6rem;
  }
`;

export const button = styled(Button)`
  width: 100%;
`;

export const demoImage = styled.div`
  display: none;

  @media ${mediaQueries.tablet} {
    display: initial;
    margin-top: 4rem;
  }
`;
