import styled, {css} from 'styled-components';

import Tooltip from 'src/components/common/Tooltip';

import {mediaQueries, colors} from 'src/styles/shared';

export const tooltip = styled(Tooltip)`
  width: 34.3rem;
  top: 5.6rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 3.2rem 1.6rem 4.8rem;
  z-index: 30;

  .author {
    margin-top: 3rem;
  }

  @media ${mediaQueries.tablet} {
    top: 8rem;
    left: 37.2rem;
    width: 45.9rem;
    padding: 3.2rem 2.8rem 3.2rem 3.2rem;
    margin: 0;

    .author {
      margin-top: 1.2rem;
    }
  }
`;

export const tooltipToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
`;

export const toolbarLink = styled.a`
  cursor: pointer;
`;

export const toolbarArrow = styled.span`
  border: solid ${colors.white};
  border-width: 0 0.2rem 0.2rem 0;
  display: inline-block;
  padding: 0.5rem;

  ${props =>
    props.position === 'left' &&
    css`
      transform: rotate(135deg);
    `}

  ${props =>
    props.position === 'right' &&
    css`
      transform: rotate(-45deg);
    `}
`;
