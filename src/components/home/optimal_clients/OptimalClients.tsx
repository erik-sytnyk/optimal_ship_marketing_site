import Image from 'next/image';
import Router from 'next/router';

import dataService from 'src/services/dataService';

import Tooltip from 'src/components/common/Tooltip';

import * as styled from './OptimalClients.styled';

function OptimalClients() {
  const data = dataService.getOptimalClients();

  const image = data.image;

  function redirectToAboutUsPage() {
    Router.push('/about#customer-stories-section');
  }

  return (
    <div id="optimal-clients">
      <div id="optimal-clients-content">
        <div id="optimal-clients-title">{data.title}</div>
        <div id="optimal-clients-description">{data.description}</div>
        <styled.button onClick={redirectToAboutUsPage}>{data.button}</styled.button>
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
