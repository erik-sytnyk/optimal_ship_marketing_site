import Router from 'next/router';

import * as styled from './styled';

interface Props {
  title: string;
  description: string;
  buttons: any;
  className: string;
}

Content.defaultProps = {
  className: ''
};

function Content({title, description, buttons, className}: Props) {
  function onClickAction(url) {
    if (!url) return;

    if (url.charAt(0) === '/') {
      Router.push(url);
      return;
    }

    window.open(url, '_blank');
  }

  return (
    <styled.content className={className}>
      <styled.title>{title}</styled.title>

      <styled.description>{description}</styled.description>

      {buttons.length > 0 &&
        buttons.map(button => {
          return (
            <styled.button key={button.title} onClick={() => onClickAction(button.url)}>
              {button.title}
            </styled.button>
          );
        })}
    </styled.content>
  );
}

export default Content;
