import styled, {css} from 'styled-components';

import Button from 'src/components/common/Button';

import {mediaQueries, mainFontSmallSpacing, title_01, title_03, body_01, link} from 'src/styles/shared';

export const wrapper = styled.div`
  padding: 1.6rem 1.6rem 4rem;

  & a {
    ${link};
  }

  @media ${mediaQueries.tablet} {
    padding: 3.2rem 4rem 4rem 13.5rem;
    max-width: 98.9rem;
  }
`;

export const navigationTitle = styled.div`
  ${mainFontSmallSpacing};
`;

export const title = styled.div`
  ${title_01};
  margin: 2.8rem 0 3.2rem;

  @media ${mediaQueries.tablet} {
    margin: 3rem 0 3.2rem;
  }
`;

export const subtitle = styled.div`
  ${title_03};
  margin-bottom: 3.2rem;
`;

export const description = styled.div`
  ${body_01};
  margin-bottom: 3.2rem;
`;

export const button = styled(Button)`
  margin: 0 auto 2rem;

  @media ${mediaQueries.tablet} {
    margin: 0 1.6rem 1.6rem;
  }
`;

export const listItem = styled.li`
  list-style-position: inside;
  ${body_01};

  ${props =>
    props.withMargin &&
    css`
      margin-bottom: 4rem;
    `}

  @media ${mediaQueries.tablet} {
    list-style-position: initial;
    margin-left: 2.3rem;
  }
`;

export const listItemText = styled.span`
  word-break: break-word;
`;
