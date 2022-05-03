import Head from 'next/head';

import Layout, {siteTitle} from '../components/layout';
import DigitalTools from '../components/templates/common/digital_tools/DigitalTools';

import IntelligentSupplyChainSolutions from '../components/templates/home/intelligent_supply/IntelligentSupplyChainSolutions';
import SuccessNumbers from '../components/templates/home/success_numbers/SuccessNumbers';
import CustomersSay from '../components/templates/home/customers_say/CustomersSay';
import HowItWorks from '../components/templates/home/how_it_works/HowItWorks';
import Services from '../components/templates/home/services/Services';
import OptimalClients from '../components/templates/home/optimal_clients/OptimalClients';
import ReadyToShip from '../components/templates/home/ready_to_ship/ReadyToShip';

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
        <HowItWorks />
        <Services />
        <OptimalClients />
        <ReadyToShip />
      </Layout>
    );
  }

  return render();
}

export default Home;
