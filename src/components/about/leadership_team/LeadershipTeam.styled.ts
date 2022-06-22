import styled from 'styled-components';

import Button from 'src/components/common/Button';

import {body_01, body_02, darkBorder, mediaQueries, title_02} from 'src/styles/shared';

const SIDE_MARGIN = '0.8rem';

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const title = styled.div`
  ${title_02};
  margin: 6rem 1.6rem;

  @media ${mediaQueries.tablet} {
    margin: 6rem 0;
  }
`;

export const itemsContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;

  @media ${mediaQueries.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100rem;
  }
`;

export const itemContainer = styled.div`
  margin: 0 ${SIDE_MARGIN} 6rem;
  min-width: 22rem;

  :first-child {
    margin-left: 1.6rem;
  }
  :last-child {
    margin-right: 1.6rem;
  }

  @media ${mediaQueries.tablet} {
    margin: 0 ${SIDE_MARGIN} 3.2rem;

    :first-child {
      margin-left: ${SIDE_MARGIN};
    }
    :last-child {
      margin-right: ${SIDE_MARGIN};
    }
  }
`;

export const personName = styled.div`
  ${body_01};
  font-weight: 800;
  margin-top: 1.6rem;
`;

export const personPosition = styled.div`
  ${body_02};
`;

export const divider = styled.div`
  border-top: ${darkBorder};
  width: 91%;
  margin-bottom: 8rem;

  @media ${mediaQueries.tablet} {
    width: 80rem;
    margin: 4.8rem 0 8rem;
  }
`;

export const question = styled.div`
  font-size: 3.2rem;
  line-height: 5.2rem;
  letter-spacing: -0.022em;
  font-weight: 800;
  margin-bottom: 2.8rem;
`;

export const button = styled(Button)`
  padding: 0 4rem;
  margin-bottom: 10rem;
`;
