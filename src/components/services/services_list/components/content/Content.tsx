import * as styled from './styled';

interface Props {
  title: string;
  description: string;
  buttons: string[];
  className: string;
}

Content.defaultProps = {
  className: ''
};

function Content({title, description, buttons, className}: Props) {
  return (
    <styled.content className={className}>
      <styled.title>{title}</styled.title>

      <styled.description>{description}</styled.description>

      {buttons.length > 0 &&
        buttons.map(button => {
          return <styled.button key={button}>{button}</styled.button>;
        })}
    </styled.content>
  );
}

export default Content;
