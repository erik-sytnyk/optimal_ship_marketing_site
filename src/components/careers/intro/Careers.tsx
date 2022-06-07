import dataService from 'src/services/dataService';

import Position from './components/Position';

import * as styled from './Careers.styled';

function Careers() {
  const data = dataService.getCareersIntro();

  const benefits = data.benefits;
  const positions = data.positions;

  return (
    <styled.container>
      <styled.header>{data.title}</styled.header>
      <styled.text>{data.description}</styled.text>

      <styled.benefitsContainer>
        <styled.text>
          <strong>{benefits.title}</strong>
        </styled.text>

        <styled.benefitsList>
          {benefits.list.map(item => {
            return <styled.benefitsListItem key={item}>{item}</styled.benefitsListItem>;
          })}
        </styled.benefitsList>
      </styled.benefitsContainer>

      <styled.title>{positions.title}</styled.title>

      {positions.items.map(item => {
        return <Position key={item.title} position={item} />;
      })}

      <styled.text dangerouslySetInnerHTML={{__html: positions.additionalQuestions}} />

      <styled.footer>{positions.footer}</styled.footer>
    </styled.container>
  );
}

export default Careers;
