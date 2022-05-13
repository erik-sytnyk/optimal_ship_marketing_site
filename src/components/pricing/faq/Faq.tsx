import Image from 'next/image';

import dataService from 'src/services/dataService';

import * as styled from './styled';

function FAQ() {
  const data = dataService.getFAQ();

  return (
    <styled.wrapper>
      <styled.title>{data.title}</styled.title>

      <styled.questionsWrapper>
        {data.questions.map((item, index) => {
          return (
            <styled.container key={index}>
              <styled.question>{item.question}</styled.question>
              <styled.answer>{item.answer}</styled.answer>
            </styled.container>
          );
        })}
      </styled.questionsWrapper>
    </styled.wrapper>
  );
}

export default FAQ;
