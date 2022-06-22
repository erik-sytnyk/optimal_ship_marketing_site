import dataService from 'src/services/dataService';

import * as styled from './ReadyToShip.styled';

function ReadyToShip() {
  const data = dataService.getReadyToShip();

  function redirectTo(url) {
    window.open(url, '_blank');
  }

  function renderItem(item) {
    return (
      <>
        <div className="tool-description">{item.description}</div>
        <styled.button outline={item.outline} onClick={() => redirectTo(item.url)}>
          {item.title}
        </styled.button>
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
