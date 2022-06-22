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
      <styled.wrapper>
        <styled.imagesContainer>
          <styled.imageContainer>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </styled.imageContainer>
          <styled.rectangle />

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
        </styled.imagesContainer>

        <styled.content>
          <styled.title>{data.title}</styled.title>
          <Link href="/about#customer-stories-section" passHref>
            <styled.link>{data.button}</styled.link>
          </Link>
        </styled.content>
      </styled.wrapper>
    );
  }

  return render();
}

export default CustomersSay;
