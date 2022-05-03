import Image from 'next/image';
import Router from 'next/router';

import dataService from 'services/dataService';

import Button from 'components/Button';
import Tooltip from 'components/Tooltip';

function OptimalClients() {
  const data = dataService.getOptimalClients();

  const image = data.image;

  function redirectToAboutUsPage() {
    Router.push('/about');
  }

  return (
    <div id="optimal-clients">
      <div id="optimal-clients-content">
        <div id="optimal-clients-title">{data.title}</div>
        <div id="optimal-clients-description">{data.description}</div>
        <Button onClick={redirectToAboutUsPage}>{data.button}</Button>
      </div>
      <div id="optimal-clients-images">
        <div id="optimal-clients-image">
          <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
        </div>
        <div id="optimal-clients-rectangle" />
        <Tooltip id="optimal-clients-tooltip" tooltip={data.tooltip} />
      </div>
    </div>
  );
}

export default OptimalClients;
