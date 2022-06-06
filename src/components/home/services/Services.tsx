import classNames from 'classnames';
import Image from 'next/image';

import dataService from 'src/services/dataService';

import Button from 'src/components/common/Button';
import Tooltip from 'src/components/common/Tooltip';

import * as styled from './Services.styled';

function Services() {
  const data = dataService.getServices();

  const services = data?.list || [];

  function redirectTo(url) {
    window.open(url, '_blank');
  }

  function renderContent(service, header = '') {
    return (
      <div className="service-content">
        <div className="service-content-container">
          {header && <div id="service-header">{header}</div>}
          <div className="service-title">{service.title}</div>
          <div className="service-description">{service.description}</div>
          <Button onClick={() => redirectTo(service.url)}>{service.button}</Button>
        </div>
      </div>
    );
  }

  function renderImages(service, index) {
    const image = service.image;

    if (index === 0) {
      return (
        <div id={`service-images-container-${index}`}>
          <div id={`service-image-${index}`}>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </div>
          <div id={`service-rectangle-${index}`} />
          <styled.firstCircles />
          <Tooltip id={`tooltip-${index}`} tooltip={service.tooltip} />
        </div>
      );
    }

    if (index === 1) {
      return (
        <div id={`service-images-container-${index}`}>
          <div id={`service-image-${index}`}>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </div>
          <div id={`service-rectangle-${index}`} />
          <styled.firstWave />
          <Tooltip id={`tooltip-${index}`} tooltip={service.tooltip} />
        </div>
      );
    }

    if (index === 2) {
      return (
        <div id={`service-images-container-${index}`}>
          <div id={`service-image-${index}`}>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </div>
          <div id={`service-rectangle-${index}`} />
          <styled.secondCircles />
          <Tooltip id={`tooltip-${index}`} tooltip={service.tooltip} />
        </div>
      );
    }

    if (index === 3) {
      return (
        <div id={`service-images-container-${index}`}>
          <div id={`service-image-${index}`}>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </div>
          <div id={`service-rectangle-${index}`} />
          <styled.secondWave />
          <Tooltip id={`tooltip-${index}`} tooltip={service.tooltip} />
        </div>
      );
    }

    return null;
  }

  function render() {
    return (
      <div id="services">
        {services.map((service, index) => {
          const header = index === 0 ? data.title : '';

          const rowClass = classNames({
            'service-row': true,
            [`service-row-${index}`]: true
          });

          if (index % 2) {
            return (
              <div key={service.title} className={rowClass}>
                {renderImages(service, index)}
                {renderContent(service)}
              </div>
            );
          }

          return (
            <div key={service.title} className={rowClass}>
              {renderContent(service, header)}
              {renderImages(service, index)}
            </div>
          );
        })}
      </div>
    );
  }

  return render();
}

export default Services;
