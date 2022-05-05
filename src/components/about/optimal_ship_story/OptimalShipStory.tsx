import {Fragment} from 'react';
import Image from 'next/image';

import dataService from 'src/services/dataService';

import Tooltip from 'src/components/common/Tooltip';
import Wave from 'src/components/common/Wave';

function OptimalShipStory() {
  const data = dataService.getOptimalShipStory();
  const successNumbers = dataService.getSuccessNumbers();

  const image = data.image;

  return (
    <div id="optimal-ship-story">
      <div id="story-container">
        <div id="story-content">
          <div id="story-title">{data.title}</div>
          {data.description.map((item, index) => {
            if (index % 2) {
              return (
                <div key={index} className="story-description">
                  {item}
                </div>
              );
            }

            return (
              <div key={index} className="story-description">
                <strong>{item}</strong>
              </div>
            );
          })}
        </div>

        <div id="story-images">
          <div id="story-image">
            <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          </div>
          <Tooltip id="optimal-story-tooltip" tooltip={data.tooltip} />
          <div id="optimal-story-rectangle" />
          <Wave id="wave-story-top" />
          <Wave id="wave-story-bottom" />

          <div id="optimal-story-statistics">
            {successNumbers.items.map((item, index) => {
              if (!index) return null;

              const lastIndex = index === successNumbers.items.length - 1;

              return (
                <Fragment key={item.header}>
                  <div>
                    <span className="statistics-text">{item.header}</span>
                    <div className="success-number">{item.content}</div>
                    <span className="statistics-text">{item.footer}</span>
                  </div>
                  {!lastIndex && <div className="divider" />}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <div id="optimal-ship-remark-container">
        <div>{data.remark}</div>
      </div>
    </div>
  );
}

export default OptimalShipStory;
