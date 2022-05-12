import Router from 'next/router';

import dataService from 'src/services/dataService';

import ToolItem from './components/ToolItem';

import * as styled from './styled';

function DigitalTools() {
  const data = dataService.getFreeDigitalTools();

  function seeAllServices() {
    Router.push('/services');
  }

  return (
    <styled.wrapper>
      <styled.title>{data.title}</styled.title>

      <styled.container>
        {data.list.map(item => {
          return <ToolItem key={item.title} item={item} />;
        })}
      </styled.container>

      <styled.button outline onClick={seeAllServices}>
        {data.button}
      </styled.button>
    </styled.wrapper>
  );
}

export default DigitalTools;
