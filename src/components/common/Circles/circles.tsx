import * as styled from './Circles.styled';

Circles.defaultProps = {
  className: ''
};

function Circles({className}) {
  return (
    <styled.external className={className}>
      <styled.internal />
    </styled.external>
  );
}

export default Circles;
