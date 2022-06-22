import Image from 'next/image';

import dataService from 'src/services/dataService';

import Button from 'src/components/common/Button';

import * as styled from './Services.styled';

function Services() {
  const data = dataService.getServices();

  const services = data?.list || [];

  function redirectTo(url) {
    window.open(url, '_blank');
  }

  function renderContent(service, header = '') {
    return (
      <styled.content>
        <styled.contentContainer>
          {header && <styled.header>{header}</styled.header>}
          <styled.title>{service.title}</styled.title>
          <styled.description>{service.description}</styled.description>
          <Button fullWidth onClick={() => redirectTo(service.url)}>
            {service.button}
          </Button>
        </styled.contentContainer>
      </styled.content>
    );
  }

  function renderImages(service, index) {
    const image = service.image;

    // preparation tool
    if (index === 0) {
      return (
        <styled.preparationImagesContainer>
          <styled.preparationImageContainer>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </styled.preparationImageContainer>
          <styled.preparationRectangle />
          <styled.preparationCircles />
          <styled.preparationTooltip tooltip={service.tooltip} />
        </styled.preparationImagesContainer>
      );
    }

    // quote tool
    if (index === 1) {
      return (
        <styled.quoteImagesContainer>
          <styled.quoteImageContainer>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </styled.quoteImageContainer>
          <styled.quoteRectangle />
          <styled.quoteWave />
          <styled.quoteTooltip tooltip={service.tooltip} />
        </styled.quoteImagesContainer>
      );
    }

    // bill pay tool
    if (index === 2) {
      return (
        <styled.billPayImagesContainer>
          <styled.billPayImageContainer>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </styled.billPayImageContainer>
          <styled.billPayRectangle />
          <styled.billPayCircles />
          <styled.billPayTooltip tooltip={service.tooltip} />
        </styled.billPayImagesContainer>
      );
    }

    // pickup tool
    if (index === 3) {
      return (
        <styled.pickupImagesContainer>
          <styled.pickupImageContainer>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </styled.pickupImageContainer>
          <styled.pickupRectangle />
          <styled.pickupWave />
          <styled.pickupTooltip tooltip={service.tooltip} />
        </styled.pickupImagesContainer>
      );
    }

    return null;
  }

  function render() {
    return (
      <styled.wrapper>
        {services.map((service, index) => {
          const key = service.title;
          const header = index === 0 ? data.title : '';

          if (index % 2) {
            return (
              <styled.serviceRow key={key} index={index}>
                {renderImages(service, index)}
                {renderContent(service)}
              </styled.serviceRow>
            );
          }

          return (
            <styled.serviceRow key={key} index={index}>
              {renderContent(service, header)}
              {renderImages(service, index)}
            </styled.serviceRow>
          );
        })}
      </styled.wrapper>
    );
  }

  return render();
}

export default Services;
