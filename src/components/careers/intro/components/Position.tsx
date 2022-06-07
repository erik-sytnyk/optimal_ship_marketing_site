import {useState} from 'react';

import Toggler from 'src/components/common/Toggler';

import * as styled from './Position.styled';

interface Props {
  position: any;
}

function Position({position}: Props) {
  const list = position.list;

  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <styled.wrapper>
      <styled.headerContainer>
        <Toggler direction={isOpened ? 'top' : 'down'} onToggle={() => setIsOpened(!isOpened)} />
        <styled.title>{position.title}</styled.title>
      </styled.headerContainer>

      {isOpened && (
        <styled.positionDetails>
          {list.map(item => {
            return (
              <styled.detailsContainer key={item.subtitle}>
                <styled.subtitle>{item.subtitle}</styled.subtitle>
                <ul>
                  {item.list.map(listItem => {
                    return <styled.listItem key={listItem}>{listItem}</styled.listItem>;
                  })}
                </ul>
              </styled.detailsContainer>
            );
          })}

          {position.footer && <div dangerouslySetInnerHTML={{__html: position.footer}} />}
        </styled.positionDetails>
      )}
    </styled.wrapper>
  );
}

export default Position;
