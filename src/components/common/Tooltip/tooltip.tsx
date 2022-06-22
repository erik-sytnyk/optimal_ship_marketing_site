import * as styled from './Tooltip.styled';

interface Props {
  tooltip: any;
  children?: any;
  className?: string;
}

Tooltip.defaultProps = {
  className: ''
};

function Tooltip({tooltip, children, className}: Props) {
  return (
    <styled.container className={className}>
      <styled.quote className="quote">{tooltip.quote}</styled.quote>
      <styled.author className="author">{tooltip.author}</styled.author>
      {children}
    </styled.container>
  );
}

export default Tooltip;
