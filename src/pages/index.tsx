import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';
import DigitalTools from 'src/components/common/DigitalTools';

import IntelligentSupplyChainSolutions from 'src/components/home/intelligent_supply/IntelligentSupplyChainSolutions';
import SuccessNumbers from 'src/components/home/success_numbers/SuccessNumbers';
import CustomersSay from 'src/components/home/customers_say/CustomersSay';
import HowItWorks from 'src/components/common/HowItWorks';
import Services from 'src/components/home/services/Services';
import OptimalClients from 'src/components/home/optimal_clients/OptimalClients';
import ReadyToShip from 'src/components/home/ready_to_ship/ReadyToShip';

function Home() {
  function render() {
    return (
      <Layout>
        <Head>
          <title>{`${siteTitle} - Home`}</title>
        </Head>

        <IntelligentSupplyChainSolutions />
        <DigitalTools />
        <SuccessNumbers />
        <CustomersSay />
        <HowItWorks pageId="home" />
        <Services />
        <OptimalClients />
        <ReadyToShip />
      </Layout>
    );
  }

  return render();
}

export default Home;
