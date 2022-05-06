import styled, {css} from 'styled-components';

import Button from 'src/components/common/Button';

import {PageId} from './HowItWorks';

import {mediaQueries, title_02, colors} from 'src/styles/shared';

export const wrapper = styled.div<{pageId: PageId}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => (props.pageId === 'services' ? '6rem 0 2.8rem' : '6rem 0 5.2rem')};

  ${props =>
    props.pageId === 'services' &&
    css`
      background-color: ${colors.bg_grey_2};
    `}

  @media ${mediaQueries.tablet} {
    padding: 6rem 0;
  }
`;

export const title = styled.div`
  ${title_02};
  margin-bottom: 4rem;

  ${props =>
    props.pageId === 'services' &&
    css`
      margin-bottom: 2rem;
    `}
`;

export const servicesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaQueries.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const button = styled(Button)`
  margin-top: 2rem;
  padding: 0 4rem;

  @media ${mediaQueries.tablet} {
    margin-top: 5.6rem;
  }
`;
