import styled, {css} from 'styled-components';

import {PageId} from '../HowItWorks';

import {mediaQueries, body_01, title_03, body_03} from 'src/styles/shared';

export const container = styled.div`
  text-align: center;
  max-width: 22.1rem;
  margin-bottom: 3.2rem;

  @media ${mediaQueries.tablet} {
    margin: 0 0.8rem;
  }
`;

export const index = styled.div<{pageId: PageId}>`
  ${body_01};
  font-weight: 900;
  margin-bottom: 0.4rem;

  @media ${mediaQueries.tablet} {
    margin-top: ${props => (props.pageId === 'services' ? 0 : '2.4rem')};
  }
`;

export const title = styled.div`
  margin-bottom: 0.4rem;

  ${props =>
    props.pageId === 'services'
      ? css`
          ${body_03};
          font-weight: 800;
        `
      : css`
          ${title_03};
        `}
`;

export const description = styled.div`
  ${body_03};
`;
