import styled from 'styled-components';

import Toggler from 'src/components/common/Toggler';

import {mediaQueries, togglerWidth} from 'src/styles/shared';

const BUTTON_SIDE_MARGIN = '2.3rem';

export const imagesContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 0.8rem;
  height: 20rem;

  @media ${mediaQueries.tablet} {
    margin-bottom: 1.6rem;
    height: 33.6rem;
    width: max-content;
  }
`;

export const imageContainer = styled.div`
  position: relative;
  margin: 0 0.8rem;
  height: inherit;
  width: 27.5rem;
  display: none;

  :first-child {
    margin-left: 0;
    display: initial;
  }

  :nth-child(2) {
    display: initial;
    width: auto;
    flex: 1;
    margin-right: 0;

    @media ${mediaQueries.tablet} {
      margin-right: 0.8rem;
      width: 50.5rem;
    }
  }

  :last-child {
    margin-right: 0;
  }

  @media ${mediaQueries.tablet} {
    display: initial;
    height: inherit;
    width: 50.5rem;
  }
`;

export const leftButton = styled(Toggler)`
  position: absolute;
  z-index: 10;
  left: ${BUTTON_SIDE_MARGIN};
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const rightButton = styled(Toggler)`
  position: absolute;
  z-index: 10;
  left: calc(100vw - calc(${BUTTON_SIDE_MARGIN} + ${togglerWidth}));
  top: 0;
  bottom: 0;
  margin: auto;

  @media ${mediaQueries.tablet} {
    left: calc(100vw - calc(${BUTTON_SIDE_MARGIN} * 2 + ${togglerWidth}));
  }
`;
