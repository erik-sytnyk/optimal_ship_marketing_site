import Image from 'next/image';

import dataService from 'src/services/dataService';

import Circles from 'src/components/common/Circles/circles';
import Wave from 'src/components/common/Wave';
import Tooltip from 'src/components/common/Tooltip';
import Button from 'src/components/common/Button';

import CustomerStory from './components/CustomerStory';

function CustomersStories() {
  const data = dataService.getCustomersStories();

  const image = data.image;

  return (
    <div id="customers-stories">
      <div id="customers-stories-header">
        <Image src={image.url} alt={image.alt} priority={true} layout="fill" objectFit="cover" />

        <div id="customers-stories-content">
          <div className="title">{data.title}</div>
          <div className="description">{data.description}</div>
        </div>
        <Circles />
        <Wave id="customers-stories-wave" />
        <Tooltip id="customers-stories-tooltip" tooltip={data.tooltip} />
      </div>

      <div id="customers-stories-body">
        {data.list.map((item, index) => {
          const isOddNumber = index % 2 ? true : false;

          return <CustomerStory key={item.title} story={item} isOddNumber={isOddNumber} />;
        })}
      </div>

      <div id="customer-stories-button-container">
        <Button outline>{data.button}</Button>
      </div>
    </div>
  );
}

export default CustomersStories;
