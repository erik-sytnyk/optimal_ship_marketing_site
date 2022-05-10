import * as styled from './styled';

interface Props {
  children: any;
  className: string;
  isOdd: boolean;
}

Container.defaultProps = {
  className: ''
};

function Container({children, className, isOdd}: Props) {
  return (
    <styled.container isOdd={isOdd} className={className}>
      {children}
    </styled.container>
  );
}

export default Container;
