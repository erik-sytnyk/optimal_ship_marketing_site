import Image from 'next/image';

function ServiceItem(props) {
  const service = props.service;
  const image = service.image;

  return (
    <div className="our-service">
      <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
      <div className="service-index">{service.index}</div>
      <div className="service-title">{service.title}</div>
      <div className="service-description">{service.description}</div>
    </div>
  );
}

export default ServiceItem;
