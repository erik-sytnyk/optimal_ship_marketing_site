import Image from 'next/image';

import dataService from 'services/dataService';

import Circles from 'components/Circles/circles';
import Wave from 'components/Wave';
import Tooltip from 'components/Tooltip';

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
    </div>
  );
}

export default CustomersStories;
