import Button from '../../../../Button';

function ToolItem(props) {
  const item = props.item;

  function redirectTo() {
    window.open(item.url, '_blank');
  }

  return (
    <div className="tool-item">
      <div>
        <div className="tool-title">{item.title}</div>
        <div className="tool-description">{item.description}</div>
      </div>

      <Button onClick={redirectTo}>{item.button}</Button>
    </div>
  );
}

export default ToolItem;
