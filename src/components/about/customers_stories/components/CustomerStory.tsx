import Image from 'next/image';

import * as styled from './styled';

interface PropTypes {
  story: any;
  isOddNumber: boolean;
}

function CustomerStory({story, isOddNumber}: PropTypes) {
  function seeStory() {
    window.open(story.url, '_blank');
  }

  function renderImage() {
    const image = story.image;

    return <Image src={image.url} alt={image.alt} width={image.width} height={image.height} priority={false} />;
  }

  function render() {
    return (
      <styled.wrapper isOdd={isOddNumber}>
        {isOddNumber && renderImage()}

        <styled.content>
          <styled.title>{story.title}</styled.title>
          <styled.description>{story.description}</styled.description>
          <styled.button onClick={seeStory}>{story.button}</styled.button>
        </styled.content>

        {!isOddNumber && renderImage()}
      </styled.wrapper>
    );
  }

  return render();
}

export default CustomerStory;
