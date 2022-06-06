import {Fragment} from 'react';

import dataService from 'src/services/dataService';

import * as styled from './SuccessNumbers.styled';

function SuccessNumbers() {
  const data = dataService.getSuccessNumbers();

  return (
    <styled.wrapper>
      {data.items.map((item, index) => {
        const lastIndex = index === data.items.length - 1;

        return (
          <Fragment key={item.header}>
            <styled.itemContainer>
              <span>{item.header}</span>
              <styled.successNumber>{item.content}</styled.successNumber>
              <span>{item.footer}</span>
            </styled.itemContainer>
            {!lastIndex && <styled.divider />}
          </Fragment>
        );
      })}
    </styled.wrapper>
  );
}

export default SuccessNumbers;
