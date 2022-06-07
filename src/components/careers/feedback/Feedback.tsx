import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './Feedback.styled';

function Feedback() {
  const data = dataService.getCareersFeedback();

  const firstStory = data.items[0];
  const firstStoryImage = firstStory.image;

  const secondStory = data.items[1];
  const secondStoryImage = secondStory.image;

  const thirdStory = data.items[2];
  const thirdStoryImage = thirdStory.image;

  return (
    <styled.wrapper>
      <styled.firstStory>
        <styled.firstStoryTooltip tooltip={firstStory} />

        <styled.firstStoryImage>
          <Image
            src={firstStoryImage.url}
            alt={firstStoryImage.alt}
            width={firstStoryImage.width}
            height={firstStoryImage.height}
          />
        </styled.firstStoryImage>

        <styled.firstStoryRectangle />
      </styled.firstStory>

      <styled.secondStory>
        <styled.secondStoryImage>
          <Image
            src={secondStoryImage.url}
            alt={secondStoryImage.alt}
            width={secondStoryImage.width}
            height={secondStoryImage.height}
          />
        </styled.secondStoryImage>

        <styled.secondStoryTooltip tooltip={secondStory} />

        <styled.secondStoryRectangle />
      </styled.secondStory>

      <styled.thirdStory>
        <styled.thirdStoryImage>
          <Image
            src={thirdStoryImage.url}
            alt={thirdStoryImage.alt}
            width={thirdStoryImage.width}
            height={thirdStoryImage.height}
          />
        </styled.thirdStoryImage>

        <styled.thirdStoryTooltip tooltip={thirdStory} />

        <styled.thirdStoryRectangle />
      </styled.thirdStory>
    </styled.wrapper>
  );
}

export default Feedback;
