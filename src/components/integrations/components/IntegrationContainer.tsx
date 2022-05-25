import Image from 'next/image';

import * as styled from './IntegrationContainer.styled';

interface Props {
  title: string;
  subtitle: string;
  description?: string;
  items: any;
  extraItems?: any;
}

function IntegrationContainer({title, subtitle, description, items, extraItems}: Props) {
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

      <styled.subtitle>{subtitle}</styled.subtitle>

      <ol>
        {items.map((item, index) => {
          const image = item.image;

          return (
            <styled.listItem key={index} withMargin={!image}>
              <span dangerouslySetInnerHTML={{__html: item.title}} />

              {image && (
                <div>
                  <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
                </div>
              )}

              {extraItems && extraItems?.[index] && <>{extraItems[index]}</>}
            </styled.listItem>
          );
        })}
      </ol>
    </styled.wrapper>
  );
}

export default IntegrationContainer;
