import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function Integrations() {
  const data = dataService.getIntegrations();

  return (
    <styled.wrapper>
      {data.items.map(item => {
        const combinedDescription = item.description ? item.description.join('<br/><br/>') : '';
        return (
          <styled.container key={item.title}>
            <styled.header>{item.title}</styled.header>

            {item.description && <styled.description dangerouslySetInnerHTML={{__html: combinedDescription}} />}

            <styled.cardList>
              {item.list.map((card, index) => {
                const image = card.icon;
                return (
                  <styled.card key={index}>
                    <div>
                      <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
                      <styled.cardTitle>{card.title}</styled.cardTitle>
                      <styled.cardDescription>{card.description}</styled.cardDescription>
                    </div>
                    {card.buttons && (
                      <styled.cardButtons>
                        {card.buttons.map((button, index) => (
                          <styled.cardButton key={index}>{button.title}</styled.cardButton>
                        ))}
                      </styled.cardButtons>
                    )}
                  </styled.card>
                );
              })}
            </styled.cardList>
          </styled.container>
        );
      })}
    </styled.wrapper>
  );
}

export default Integrations;
