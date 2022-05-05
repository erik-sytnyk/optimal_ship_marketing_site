import dataService from 'src/services/dataService';

import Button from 'src/components/common/Button';

function ReadyToShip() {
  const data = dataService.getReadyToShip();

  function redirectTo(url) {
    window.open(url, '_blank');
  }

  function renderItem(item) {
    return (
      <>
        <div className="tool-description">{item.description}</div>
        <Button outline={item.outline} onClick={() => redirectTo(item.url)}>
          {item.title}
        </Button>
      </>
    );
  }

  function render() {
    return (
      <div id="ready-to-ship">
        <div id="ready-to-ship-container">
          <div className="title">{data.title}</div>

          {renderItem(data.list[0])}
          <div className="tool-divider">
            <div /> <span>or</span> <div />
          </div>
          {renderItem(data.list[1])}
        </div>
      </div>
    );
  }

  return render();
}

export default ReadyToShip;
