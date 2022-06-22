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
        <styled.description>{item.description}</styled.description>
        <styled.button outline={item.outline} onClick={() => redirectTo(item.url)}>
          {item.title}
        </styled.button>
      </>
    );
  }

  function render() {
    return (
      <styled.wrapper>
        <styled.container>
          <styled.title>{data.title}</styled.title>

          {renderItem(data.list[0])}

          <styled.divider>
            <div /> <span>or</span> <div />
          </styled.divider>

          {renderItem(data.list[1])}
        </styled.container>
      </styled.wrapper>
    );
  }

  return render();
}

export default ReadyToShip;
