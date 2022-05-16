import {useState} from 'react';
import Image from 'next/image';

import Toggler from 'src/components/common/Toggler';

import * as styled from './styled';

interface Props {
  partner: any;
}

function Partner({partner}: Props) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function renderHeader() {
    return (
      <>
        <styled.header>
          <strong>{partner.partnerName}</strong> - {partner.header}
        </styled.header>

        <styled.headerMobile>
          <strong>{partner.partnerName}</strong>
          <br />
          {partner.header}
        </styled.headerMobile>
      </>
    );
  }

  function renderBody() {
    if (!isOpened) return null;

    return (
      <styled.body>
        {partner.title && (
          <styled.textRow>
            <strong>{partner.title}</strong>
          </styled.textRow>
        )}

        {partner.description && <styled.textRow>{partner.description}</styled.textRow>}

        {partner.items.map((item, index) => {
          return (
            <styled.textRow key={index}>
              <div>
                <strong>{item.title}</strong>
              </div>
              <div>
                <span>{item.description} </span>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.link}
                  </a>
                )}
              </div>
            </styled.textRow>
          );
        })}
      </styled.body>
    );
  }

  function render() {
    const icon = partner.icon;

    return (
      <styled.wrapper>
        <styled.headerContainer>
          <styled.content>
            <Toggler direction={isOpened ? 'top' : 'down'} onToggle={() => setIsOpened(!isOpened)} />
            {renderHeader()}
          </styled.content>

          <styled.iconContainer>
            <Image src={icon.url} alt={icon.alt} width={icon.width} height={icon.height} />
          </styled.iconContainer>
        </styled.headerContainer>

        {renderBody()}
      </styled.wrapper>
    );
  }

  return render();
}

export default Partner;
