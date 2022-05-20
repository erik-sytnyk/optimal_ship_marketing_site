import {useState, useEffect, Fragment} from 'react';
import Image from 'next/image';

import dataService from 'src/services/dataService';

import Container from './components/container/Container';
import SearchInput from './components/search/SearchInput';
import Navigation from './components/navigation/Navigation';
import Question from './components/question/Question';

import * as styled from './styled';

function Support() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [isSearchMode, setIsSearchMode] = useState<boolean>(false);

  const data = dataService.getSupportFAQ();

  useEffect(() => {
    if (!isSearchMode) return;

    if (selectedCategory) setSelectedCategory('');
  }, [isSearchMode, selectedCategory]);

  function onSearchHandler() {
    setIsSearchMode(search ? true : false);
  }

  function renderRegularState() {
    const selectedItem = data.list.find(item => item.title === selectedCategory);

    if (!selectedCategory) return null;

    const questions = selectedItem.questions;

    if (Array.isArray(questions)) {
      return questions.map((item, index) => {
        return <Question key={index} questionItem={item} />;
      });
    }

    return Object.keys(questions).map(key => {
      return (
        <Fragment key={key}>
          <styled.subcategory>{key}</styled.subcategory>

          {questions[key].map((item, index) => {
            return <Question key={index} questionItem={item} />;
          })}
        </Fragment>
      );
    });
  }

  function renderInitialState() {
    return data.list.map(category => {
      const title = category.title;
      const icon = category.icon;

      return (
        <Container key={title} onClick={() => setSelectedCategory(title)}>
          <styled.categoryIcon>
            <Image src={icon.url} alt={icon.alt} width={icon.width} height={icon.height} />
          </styled.categoryIcon>
          <styled.categoryTitle>{title}</styled.categoryTitle>
        </Container>
      );
    });
  }

  function render() {
    const header = data.title;

    const initialMode = !selectedCategory && !isSearchMode;
    const regularMode = selectedCategory && !isSearchMode;

    return (
      <styled.wrapper>
        <styled.headerContainer bottomPadding={selectedCategory ? false : true}>
          <styled.header>{header}</styled.header>

          <SearchInput value={search} onChange={val => setSearch(val)} onSearch={onSearchHandler} />

          {regularMode && (
            <Navigation home={header} current={selectedCategory} goBack={() => setSelectedCategory('')} />
          )}
        </styled.headerContainer>

        {initialMode && renderInitialState()}

        {regularMode && renderRegularState()}
      </styled.wrapper>
    );
  }

  return render();
}

export default Support;
