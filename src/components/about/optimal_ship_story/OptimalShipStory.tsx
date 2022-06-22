import {Fragment} from 'react';
import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './OptimalShipStory.styled';

function OptimalShipStory() {
  const data = dataService.getOptimalShipStory();
  const successNumbers = dataService.getSuccessNumbers();

  const image = data.image;

  return (
    <div>
      <styled.storyContainer>
        <styled.content>
          <styled.title>{data.title}</styled.title>

          {data.description.map((item, index) => {
            if (index % 2) {
              return <styled.description key={index}>{item}</styled.description>;
            }

            return (
              <styled.description key={index}>
                <strong>{item}</strong>
              </styled.description>
            );
          })}
        </styled.content>

        <styled.imagesContainer>
          <styled.imageContainer>
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </styled.imageContainer>
          <styled.tooltip tooltip={data.tooltip} />
          <styled.rectangle />
          <styled.waveTop />
          <styled.waveBottom />

          <styled.statistics>
            {successNumbers.items.map((item, index) => {
              if (!index) return null;

              const lastIndex = index === successNumbers.items.length - 1;

              return (
                <Fragment key={item.header}>
                  <div>
                    <styled.statisticsText>{item.header}</styled.statisticsText>
                    <styled.successNumber>{item.content}</styled.successNumber>
                    <styled.statisticsText>{item.footer}</styled.statisticsText>
                  </div>
                  {!lastIndex && <styled.divider />}
                </Fragment>
              );
            })}
          </styled.statistics>
        </styled.imagesContainer>
      </styled.storyContainer>

      <styled.remarkContainer>
        <styled.remark>{data.remark}</styled.remark>
      </styled.remarkContainer>
    </div>
  );
}

export default OptimalShipStory;
