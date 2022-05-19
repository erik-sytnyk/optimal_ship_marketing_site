import {useState} from 'react';
import Image from 'next/image';

import dataService from 'src/services/dataService';

import Container from './components/container/Container';
import SearchInput from './components/search/SearchInput';

import * as styled from './styled';

function Support() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const data = dataService.getSupportFAQ();

  function onSearchHandler() {
    console.log('yo');
  }

  function renderInitialState() {
    return data.list.map(category => {
      const icon = category.icon;

      return (
        <Container key={category.title}>
          <styled.categoryIcon>
            <Image src={icon.url} alt={icon.alt} width={icon.width} height={icon.height} />
          </styled.categoryIcon>
          <styled.categoryTitle>{category.title}</styled.categoryTitle>
        </Container>
      );
    });
  }

  function render() {
    return (
      <styled.wrapper>
        <styled.headerContainer>
          <styled.header>{data.title}</styled.header>

          <SearchInput value={search} onChange={val => setSearch(val)} onSearch={onSearchHandler} />
        </styled.headerContainer>

        {!selectedCategory && renderInitialState()}
      </styled.wrapper>
    );
  }

  return render();
}

export default Support;
