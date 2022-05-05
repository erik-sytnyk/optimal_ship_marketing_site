import Image from 'next/image';

import dataService from 'src/services/dataService';

import Tooltip from 'src/components/common/Tooltip';
import Wave from 'src/components/common/Wave';

function IntelligentSupplyChainSolutions() {
  const data = dataService.getIntelligentSupplyChainSolutions();

  const image = data.image;

  return (
    <div id="intelligent-supply-chain-solutions">
      <div className="intelligent-supply-content">
        <div className="intelligent-supply-title">{data.title}</div>
        <div className="intelligent-supply-subtitle">{data.description}</div>
        <div className="intelligent-supply-list-header">{data.list.title}</div>
        <ul>
          {data.list.items.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="intelligent-supply-images">
        <div id="intelligent-supply-image">
          <Image src={image.url} alt={image.alt} width={image.width} height={image.height} />
          <Wave id="wave-top" />
          <Wave id="wave-bottom" />
        </div>
        <div className="rectangle" />
        <Tooltip id="intelligent-supply-tooltip" tooltip={data.tooltip} />
      </div>
    </div>
  );
}

export default IntelligentSupplyChainSolutions;
