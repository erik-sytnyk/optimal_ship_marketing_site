import Image from 'next/image';
import {useState} from 'react';

import dataService from 'src/services/dataService';

import * as styled from './Delimiter.styled';

function Delimiter() {
  const data = dataService.getCareersDelimiter();

  const [images, setImages] = useState(data.images);

  function onLeftClick() {
    const newImages = [...images];
    newImages.unshift(newImages.pop());

    setImages(newImages);
  }

  function onRightClick() {
    const newImages = [...images];
    newImages.push(newImages.shift());

    setImages(newImages);
  }

  return (
    <div>
      <styled.imagesContainer>
        {images.map((image, index) => {
          return (
            <styled.imageContainer key={index}>
              <Image src={image.url} alt={image.alt} layout="fill" objectFit="cover" />
            </styled.imageContainer>
          );
        })}

        <styled.leftButton direction="left" onToggle={onLeftClick} />
        <styled.rightButton direction="right" onToggle={onRightClick} />
      </styled.imagesContainer>
    </div>
  );
}

export default Delimiter;
