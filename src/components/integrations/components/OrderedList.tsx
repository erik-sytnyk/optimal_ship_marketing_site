import Image from 'next/image';

import * as styled from './OrderedList.styled';

interface Props {
  list: string[];
  images: object;
}

function OrderedList({list, images}: Props) {
  return (
    <styled.orderedList type="a">
      {list.map((item, index) => {
        const image = images[index];

        return (
          <styled.listItem key={index}>
            <span dangerouslySetInnerHTML={{__html: item}} />
            {image && (
              <div>
                <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
              </div>
            )}
          </styled.listItem>
        );
      })}
    </styled.orderedList>
  );
}

export default OrderedList;
