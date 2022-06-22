import Image from 'next/image';
import Router from 'next/router';

import dataService from 'src/services/dataService';

import * as styled from './LeadershipTeam.styled';

function LeadershipTeam() {
  const data = dataService.getLeadershipTeam();

  function seeOurOpenPositions() {
    Router.push('/careers');
  }

  return (
    <styled.wrapper>
      <styled.title>{data.title}</styled.title>
      <styled.itemsContainer>
        {data.list.map(item => {
          const image = item.image;

          return (
            <styled.itemContainer key={item.name}>
              <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
              <styled.personName>{item.name}</styled.personName>
              <styled.personPosition>{item.position}</styled.personPosition>
            </styled.itemContainer>
          );
        })}
      </styled.itemsContainer>

      <styled.divider />
      <styled.question>{data.subtitle}</styled.question>
      <styled.button onClick={seeOurOpenPositions}>{data.button}</styled.button>
    </styled.wrapper>
  );
}

export default LeadershipTeam;
