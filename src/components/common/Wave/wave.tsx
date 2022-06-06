import * as styled from './Wave.styled';

Wave.defaultProps = {
  className: ''
};

function Wave({className}) {
  return <styled.container className={className} />;
}

export default Wave;
