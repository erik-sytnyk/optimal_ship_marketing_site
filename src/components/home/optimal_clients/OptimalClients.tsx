import Image from 'next/image';
import Router from 'next/router';

import dataService from 'src/services/dataService';

import * as styled from './OptimalClients.styled';

function OptimalClients() {
  const data = dataService.getOptimalClients();

  const image = data.image;

  function redirectToAboutUsPage() {
    Router.push('/about#customer-stories-section');
  }

  return (
    <styled.wrapper>
      <styled.content>
        <styled.title>{data.title}</styled.title>
        <styled.description>{data.description}</styled.description>
        <styled.button onClick={redirectToAboutUsPage}>{data.button}</styled.button>
      </styled.content>

      <styled.imagesContainer>
        <styled.imageContainer>
          <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
        </styled.imageContainer>
        <styled.rectangle />
        <styled.tooltip tooltip={data.tooltip} />
      </styled.imagesContainer>
    </styled.wrapper>
  );
}

export default OptimalClients;
