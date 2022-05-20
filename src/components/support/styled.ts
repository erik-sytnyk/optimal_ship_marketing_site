import styled from 'styled-components';

import {mediaQueries, sectionTitle_1, body_01, sectionTitle_4} from 'src/styles/shared';

export const wrapper = styled.div`
  width: 100%;
  padding: 3.2rem 0 3.6rem;

  @media ${mediaQueries.tablet} {
    padding: 8rem 1.5rem 14rem;
    width: 120rem;
    margin: 0 auto;
  }
`;

export const headerContainer = styled.div`
  padding: ${props => (props.bottomPadding ? '0 1.6rem 3.6rem' : '0 1.6rem')};

  @media ${mediaQueries.tablet} {
    padding: ${props => (props.bottomPadding ? '0 0 4rem' : 0)};
  }
`;

export const header = styled.div`
  ${sectionTitle_1};
  margin-bottom: 4rem;
  padding: 0 1.6rem;

  @media ${mediaQueries.tablet} {
    white-space: pre-line;
    padding: 0;
  }
`;

export const categoryIcon = styled.div`
  margin: 0 1.6rem 0;

  @media ${mediaQueries.tablet} {
    margin: 0 4.6rem 0 3.2rem;
  }
`;

export const categoryTitle = styled.div`
  ${body_01};
  font-weight: 800;
  flex: 1;
`;

export const subcategory = styled.div`
  margin: 4rem 1.6rem 1.6rem;
  ${sectionTitle_4};

  @media ${mediaQueries.tablet} {
    margin: 4rem 0 1.6rem;
  }
`;
