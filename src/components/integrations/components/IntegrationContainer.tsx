import Image from 'next/image';

import * as styled from './IntegrationContainer.styled';

interface Props {
  title: string;
  description?: string;
  button?: any;
  headerImage?: any;
  subtitle: string;
  items: any;
  customItems?: any;
  children?: any;
  childrenPosition?: 'top' | 'bottom';
}

IntegrationContainer.defaultProps = {
  childrenPosition: 'bottom'
};

function IntegrationContainer({
  title,
  description,
  button,
  headerImage,
  subtitle,
  items,
  customItems,
  children,
  childrenPosition
}: Props) {
  function onButtonClick() {
    window.open(button.url, '_blank');
  }

  const navigationTitle = (
    <span>
      Platform Integrations {'>'} <strong>{title}</strong>
    </span>
  );

  return (
    <styled.wrapper>
      <styled.navigationTitle>{navigationTitle}</styled.navigationTitle>

      <styled.title>{title}</styled.title>

      {description && <styled.description dangerouslySetInnerHTML={{__html: description}} />}

      {button && <styled.button onClick={onButtonClick}>{button.text}</styled.button>}

      {headerImage && (
        <div>
          <Image src={headerImage.url} alt={headerImage.alt} width={headerImage.width} height={headerImage.height} />
        </div>
      )}

      {childrenPosition === 'top' && children}

      <styled.subtitle>{subtitle}</styled.subtitle>

      <ol>
        {items.map((item, index) => {
          const image = item.image;

          return (
            <styled.listItem key={index} withMargin={!image}>
              <styled.listItemText dangerouslySetInnerHTML={{__html: item.title}} />

              {image && (
                <div>
                  <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
                </div>
              )}

              {item.images && (
                <div>
                  {item.images.map(img => {
                    return <Image key={img.alt} src={img.url} alt={img.alt} width={img.width} height={img.height} />;
                  })}
                </div>
              )}

              {customItems && customItems?.[index] && <>{customItems[index]}</>}
            </styled.listItem>
          );
        })}
      </ol>

      {childrenPosition === 'bottom' && children}
    </styled.wrapper>
  );
}

export default IntegrationContainer;
