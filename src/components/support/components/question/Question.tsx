import {useState} from 'react';

import Toggler from 'src/components/common/Toggler';

import * as styled from './styled';

interface Props {
  questionItem: any;
}

function Question({questionItem}: Props) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <styled.wrapper>
      <styled.headerContainer>
        <Toggler direction={isOpened ? 'top' : 'down'} onToggle={() => setIsOpened(!isOpened)} />
        <styled.question>{questionItem.question}</styled.question>
      </styled.headerContainer>

      {isOpened && <styled.answer dangerouslySetInnerHTML={{__html: questionItem.answer}} />}
    </styled.wrapper>
  );
}

export default Question;
