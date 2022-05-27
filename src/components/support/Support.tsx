import {useState, Fragment} from 'react';
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
  const [foundQuestions, setFoundQuestions] = useState([]);

  const data = dataService.getSupportFAQ();

  function onSearchHandler() {
    if (!search) {
      setIsSearchMode(false);
      setFoundQuestions([]);
      return;
    }

    const searchStr = search.toLowerCase();

    let result = [];

    const searchQuestions = arrayToSearch => {
      arrayToSearch.forEach(item => {
        if (item.question.toLowerCase().includes(searchStr) || item.answer.toLowerCase().includes(searchStr)) {
          result.push(item);
        }
      });
    };

    data.list.forEach(listItem => {
      if (selectedCategory && listItem.title !== selectedCategory) return;

      if (Array.isArray(listItem.questions)) {
        searchQuestions(listItem.questions);
      } else {
        Object.values(listItem.questions).forEach(values => {
          searchQuestions(values);
        });
      }
    });

    setIsSearchMode(true);
    setFoundQuestions(result);
  }

  function renderSearchState() {
    if (foundQuestions.length === 0) return null;

    return foundQuestions.map((item, index) => {
      return <Question key={index} questionItem={item} initiallyOpened search={search} />;
    });
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

        {isSearchMode && renderSearchState()}
      </styled.wrapper>
    );
  }

  return render();
}

export default Support;
