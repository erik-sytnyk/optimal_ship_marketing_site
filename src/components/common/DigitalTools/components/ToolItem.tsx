import * as styled from './styled';

function ToolItem(props) {
  const item = props.item;

  function redirectTo() {
    window.open(item.url, '_blank');
  }

  return (
    <styled.container>
      <div>
        <styled.title>{item.title}</styled.title>
        <styled.description>{item.description}</styled.description>
      </div>

      <styled.button onClick={redirectTo}>{item.button}</styled.button>
    </styled.container>
  );
}

export default ToolItem;
