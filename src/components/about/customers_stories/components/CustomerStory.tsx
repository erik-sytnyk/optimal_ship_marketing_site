import Image from 'next/image';
import classNames from 'classnames';

import Button from 'src/components/common/Button';

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
    const storyClass = classNames({
      'customer-story': true,
      'customer-story-odd': isOddNumber
    });

    return (
      <div className={storyClass}>
        {isOddNumber && renderImage()}

        <div className="customer-story-content">
          <div className="customer-title">{story.title}</div>
          <div className="customer-description">{story.description}</div>
          <Button>{story.button}</Button>
        </div>

        {!isOddNumber && renderImage()}
      </div>
    );
  }

  return render();
}

export default CustomerStory;
