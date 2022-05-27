import {useState} from 'react';

import dataService from 'src/services/dataService';

import IntegrationContainer from '../components/IntegrationContainer';

import * as styled from './Shopify.styled';

function Shopify() {
  const data = dataService.getIntegrationShopify();

  const [url, setUrl] = useState<string>('');

  const customItems = {
    [1]: (
      <styled.form>
        <styled.input name="url" placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} />
        <styled.button>Generate Installation URL</styled.button>
      </styled.form>
    )
  };

  return (
    <IntegrationContainer
      title={data.title}
      description={data.description}
      subtitle={data.subtitle}
      items={data.list}
      customItems={customItems}
    />
  );
}

export default Shopify;
