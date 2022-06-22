import * as styled from './Button.styled';

interface Props {
  search?: boolean;
  outline?: boolean;
  fullWidth?: boolean;
  onClick: () => void;
  disabled?: boolean;
  children: any;
  className?: string;
}

Button.defaultProps = {
  search: false,
  outline: false,
  fullWidth: false,
  className: '',
  disabled: false
};

function Button({children, search, outline, fullWidth, disabled, onClick, className}: Props) {
  function clickButton() {
    if (!onClick) return;

    onClick();
  }

  return (
    <styled.button
      search={search}
      outline={outline}
      fullWidth={fullWidth}
      className={className}
      disabled={disabled}
      onClick={clickButton}>
      {children}
    </styled.button>
  );
}

export default Button;
