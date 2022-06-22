import styled, {css} from 'styled-components';

export const orderedList = styled.ol`
  margin-top: 3.2rem;
`;

export const listItem = styled.li`
  margin-left: 2rem;

  ${props =>
    props.withMargin &&
    css`
      margin-bottom: 4rem;
    `}
`;
