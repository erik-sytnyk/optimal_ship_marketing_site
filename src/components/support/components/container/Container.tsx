import * as styled from './styled';

interface Props {
  onClick?: () => void;
  children: any;
}

function Container({children, onClick}: Props) {
  const isClickable = onClick ? true : false;

  return (
    <styled.container clickable={isClickable} onClick={onClick}>
      {children}
    </styled.container>
  );
}

export default Container;
