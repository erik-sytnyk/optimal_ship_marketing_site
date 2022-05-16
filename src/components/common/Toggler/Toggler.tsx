import * as styled from './styled';

interface Props {
  direction: 'top' | 'down';
  onToggle: () => void;
}

function Toggler({direction, onToggle}: Props) {
  return (
    <styled.button onClick={onToggle}>
      <styled.arrow direction={direction} />
    </styled.button>
  );
}

export default Toggler;
