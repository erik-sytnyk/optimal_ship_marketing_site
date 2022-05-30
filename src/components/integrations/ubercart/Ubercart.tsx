import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';
import OrderedList from '../components/OrderedList';

function Ubercart() {
  const data = dataService.getIntegrationUbercart();

  const content1 = data.list[0].content;
  const content2 = data.list[1].content;
  const content3 = data.list[2].content;
  const content4 = data.list[3].content;

  const customItems = {
    [0]: <OrderedList list={content1.orderedList} images={content1.images} />,
    [1]: <OrderedList list={content2.orderedList} images={content2.images} />,
    [2]: <OrderedList list={content3.orderedList} images={content3.images} />,
    [3]: <OrderedList list={content4.orderedList} images={content4.images} />
  };

  return (
    <IntegrationContainer title={data.title} subtitle={data.subtitle} items={data.list} customItems={customItems} />
  );
}

export default Ubercart;
