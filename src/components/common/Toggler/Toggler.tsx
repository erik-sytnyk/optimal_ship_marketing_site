import * as styled from './styled';

interface Props {
  direction: 'top' | 'down' | 'left' | 'right';
  onToggle: () => void;
  className?: string;
}

Toggler.defaultProps = {
  className: ''
};

function Toggler({direction, onToggle, className}: Props) {
  return (
    <styled.button className={className} onClick={onToggle}>
      <styled.arrow direction={direction} />
    </styled.button>
  );
}

export default Toggler;
