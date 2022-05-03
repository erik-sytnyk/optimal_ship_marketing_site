import Router from 'next/router';

import dataService from 'services/dataService';

import ToolItem from './components/ToolItem';
import Button from 'components/Button';

function DigitalTools() {
  const data = dataService.getFreeDigitalTools();

  function seeAllServices() {
    Router.push('/services');
  }

  return (
    <div id="digital-tools">
      <div id="digital-tools-title">{data.title}</div>

      <div id="digital-items-container">
        {data.list.map(item => {
          return <ToolItem key={item.title} item={item} />;
        })}
      </div>

      <Button outline onClick={seeAllServices}>
        {data.button}
      </Button>
    </div>
  );
}

export default DigitalTools;
