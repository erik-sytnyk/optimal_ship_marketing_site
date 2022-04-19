import Head from 'next/head';

import Layout, {siteTitle} from '../components/layout';
import IntelligentSupplyChainSolutions from '../components/templates/home/intelligent_supply/IntelligentSupplyChainSolutions';
import DigitalTools from '../components/templates/home/digital_tools/DigitalTools';
import SuccessNumbers from '../components/templates/home/success_numbers/SuccessNumbers';
import CustomersSay from '../components/templates/home/customers_say/CustomersSay';

function Home() {
  function render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle} - Home</title>
        </Head>

        <IntelligentSupplyChainSolutions />
        <DigitalTools />
        <SuccessNumbers />
        <CustomersSay />
      </Layout>
    );
  }

  return render();
}

export default Home;
