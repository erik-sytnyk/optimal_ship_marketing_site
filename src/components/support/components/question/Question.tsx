import {useState} from 'react';

import Toggler from 'src/components/common/Toggler';

import * as styled from './styled';

interface Props {
  questionItem: any;
  initiallyOpened?: boolean;
  search?: string;
}

Question.defaultProps = {
  initiallyOpened: false
};

function Question({questionItem, initiallyOpened, search}: Props) {
  const [isOpened, setIsOpened] = useState<boolean>(initiallyOpened);

  const regex = new RegExp(search, 'gi');
  const highlighter = '<mark class="highlight">$&</mark>';

  const question = search ? questionItem.question.replace(regex, highlighter) : questionItem.question;
  const answer = search ? questionItem.answer.replace(regex, highlighter) : questionItem.answer;

  return (
    <styled.wrapper>
      <styled.headerContainer>
        <Toggler direction={isOpened ? 'top' : 'down'} onToggle={() => setIsOpened(!isOpened)} />
        <styled.question dangerouslySetInnerHTML={{__html: question}} />
      </styled.headerContainer>

      {isOpened && <styled.answer dangerouslySetInnerHTML={{__html: answer}} />}
    </styled.wrapper>
  );
}

export default Question;
