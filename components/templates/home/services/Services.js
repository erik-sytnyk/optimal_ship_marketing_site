import Image from 'next/image';

import dataService from '../../../../services/dataService';

import Button from '../../../Button/button';

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
        <div id="service-images-1">
          <div id="service-image-1">
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </div>
          <div id="service-rectangle-1" />
          <div id="service-circle-external" />
          <div id="service-circle-internal" />
          <div className="tooltip tooltip-1">
            <div className="tooltip-quote">{service.tooltip.quote}</div>
            <div className="tooltip-author">{service.tooltip.author}</div>
          </div>
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

          if (index % 2) {
            return (
              <div key={service.title} className="service-row">
                {renderImages(service, index)}
                {renderContent(service)}
              </div>
            );
          }

          return (
            <div key={service.title} className="service-row">
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
