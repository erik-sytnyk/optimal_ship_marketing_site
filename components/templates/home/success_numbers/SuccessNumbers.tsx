import {Fragment} from 'react';

import dataService from 'services/dataService';

function SuccessNumbers() {
  const data = dataService.getSuccessNumbers();

  return (
    <div id="success-numbers">
      {data.items.map((item, index) => {
        const lastIndex = index === data.items.length - 1;

        return (
          <Fragment key={item.header}>
            <div className="success-number-container">
              <span>{item.header}</span>
              <div className="success-number">{item.content}</div>
              <span>{item.footer}</span>
            </div>
            {!lastIndex && <div className="divider" />}
          </Fragment>
        );
      })}
    </div>
  );
}

export default SuccessNumbers;
