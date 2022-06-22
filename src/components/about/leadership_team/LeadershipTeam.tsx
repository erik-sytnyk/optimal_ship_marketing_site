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
    <div id="leadership-team">
      <div id="leadership-team-title">{data.title}</div>
      <div id="leadership-container">
        {data.list.map(item => {
          const image = item.image;

          return (
            <div key={item.name} className="leadership-item">
              <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
              <div className="leadership-name">{item.name}</div>
              <div className="leadership-position">{item.position}</div>
            </div>
          );
        })}
      </div>

      <div id="leadership-divider" />
      <div id="leadership-team-question">{data.subtitle}</div>
      <styled.button onClick={seeOurOpenPositions}>{data.button}</styled.button>
    </div>
  );
}

export default LeadershipTeam;
