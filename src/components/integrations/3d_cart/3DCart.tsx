import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';
import OrderedList from '../components/OrderedList';

function Cart() {
  const data = dataService.getIntegration3DCart();

  const content1 = data.list[0].content;
  const content2 = data.list[1].content;

  const customItems = {
    [0]: <OrderedList list={content1.orderedList} images={content1.images} />,
    [1]: <OrderedList list={content2.orderedList} images={content2.images} />
  };

  return (
    <IntegrationContainer title={data.title} subtitle={data.subtitle} items={data.list} customItems={customItems} />
  );
}

export default Cart;
