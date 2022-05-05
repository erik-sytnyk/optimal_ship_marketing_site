import Image from 'next/image';

import * as styled from './styled';

interface PropTypes {
  story: any;
  isOddNumber: boolean;
}

function CustomerStory({story, isOddNumber}: PropTypes) {
  function renderImage() {
    const image = story.image;

    return <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />;
  }

  function render() {
    return (
      <styled.wrapper isOdd={isOddNumber}>
        {isOddNumber && renderImage()}

        <styled.content>
          <styled.title>{story.title}</styled.title>
          <styled.description>{story.description}</styled.description>
          <styled.button>{story.button}</styled.button>
        </styled.content>

        {!isOddNumber && renderImage()}
      </styled.wrapper>
    );
  }

  return render();
}

export default CustomerStory;
