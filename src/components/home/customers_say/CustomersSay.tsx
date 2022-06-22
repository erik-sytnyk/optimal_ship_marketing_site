import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import dataService from 'src/services/dataService';

import * as styled from './CustomersSay.styled';

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

  function render() {
    const image = feedback.image;

    return (
      <div id="customers-say">
        <div id="customers-say-images">
          <div id="customers-say-image">
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </div>
          <div className="rectangle" />

          <styled.tooltip tooltip={feedback}>
            <styled.tooltipToolbar>
              <styled.toolbarLink onClick={onLeftClick}>
                <styled.toolbarArrow position="left" />
              </styled.toolbarLink>

              <styled.toolbarLink onClick={onRightClick}>
                <styled.toolbarArrow position="right" />
              </styled.toolbarLink>
            </styled.tooltipToolbar>
          </styled.tooltip>
        </div>

        <div id="customers-say-content">
          <div id="customers-say-title">{data.title}</div>
          <Link href="/about#customer-stories-section">
            <a>{data.button}</a>
          </Link>
        </div>
      </div>
    );
  }

  return render();
}

export default CustomersSay;
