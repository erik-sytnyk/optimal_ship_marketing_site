import * as styled from './styled';

interface Props {
  home: string;
  current: string;
  goBack: () => void;
}

function Navigation({home, current, goBack}: Props) {
  return (
    <styled.navigation>
      <styled.backLink onClick={goBack}>{home}</styled.backLink>
      <span>{' > '}</span>
      <span>
        <strong>{current}</strong>
      </span>
    </styled.navigation>
  );
}

export default Navigation;
