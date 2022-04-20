import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import dataService from '../../../../services/dataService';

function CustomersSay() {
  const data = dataService.getCustomersFeedback();
  const list = data?.list || [];

  const [feedback, setFeedback] = useState(list[0]);

  function onLeftClick() {
    const index = list.findIndex(item => item.quote === feedback.quote);

    const previousIndex = index - 1;

    if (list[previousIndex]) {
      setFeedback(list[previousIndex]);
    } else {
      setFeedback(list[list.length - 1]);
    }
  }

  function onRightClick() {
    const index = list.findIndex(item => item.quote === feedback.quote);

    const nextIndex = index + 1;

    if (list[nextIndex]) {
      setFeedback(list[nextIndex]);
    } else {
      setFeedback(list[0]);
    }
  }

  const image = feedback.image;

  return (
    <div id="customers-say">
      <div id="customers-say-images">
        <div id="customers-say-image">
          <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
        </div>
        <div className="rectangle" />
        <div className="tooltip">
          <div className="quote">{feedback?.quote}</div>
          <div className="author">{feedback?.author}</div>
          <div className="toolbar">
            <a onClick={onLeftClick}>
              <span className="arrow left" />
            </a>
            <a onClick={onRightClick}>
              <span className="arrow right" />
            </a>
          </div>
        </div>
      </div>
      <div id="customers-say-content">
        <div id="customers-say-title">{data.title}</div>
        <Link href="/services">
          <a>{data.button}</a>
        </Link>
      </div>
    </div>
  );
}

export default CustomersSay;
