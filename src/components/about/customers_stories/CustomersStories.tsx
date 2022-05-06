import dataService from 'src/services/dataService';

import Button from 'src/components/common/Button';

import CustomerStory from './components/CustomerStory';

import * as styled from './styled';

function CustomersStories() {
  const data = dataService.getCustomersStories();

  const image = data.image;

  return (
    <styled.wrapper>
      <styled.headerContainer>
        <styled.image src={image.url} alt={image.alt} priority={true} layout="fill" objectFit="cover" />

        <styled.content>
          <styled.title>{data.title}</styled.title>
          <styled.description>{data.description}</styled.description>
        </styled.content>
        <styled.circles />
        <styled.wave />
        <styled.tooltip tooltip={data.tooltip} />
      </styled.headerContainer>

      <styled.list>
        {data.list.map((item, index) => {
          const isOddNumber = index % 2 ? true : false;

          return <CustomerStory key={item.title} story={item} isOddNumber={isOddNumber} />;
        })}
      </styled.list>

      <styled.buttonContainer>
        <Button outline>{data.button}</Button>
      </styled.buttonContainer>
    </styled.wrapper>
  );
}

export default CustomersStories;