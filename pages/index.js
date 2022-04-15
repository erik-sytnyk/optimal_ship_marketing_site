import Head from 'next/head';

import Layout, {siteTitle} from '../components/layout';
import IntelligentSupplyChainSolutions from '../components/templates/home/intelligent_supply/IntelligentSupplyChainSolutions';

function Home() {
  function render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle} - Home</title>
        </Head>

        <IntelligentSupplyChainSolutions />
      </Layout>
    );
  }

  return render();
}

export default Home;
