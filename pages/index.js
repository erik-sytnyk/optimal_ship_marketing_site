import Head from 'next/head';
import Image from 'next/image';

import Layout, {siteTitle} from '../components/layout';

function Home() {
  function intelligentSupplyChainSolutions() {
    return (
      <div id="intelligent-supply-chain-solutions">
        <div className="intelligent-supply-content">
          <div className="intelligent-supply-title">
            Intelligent <br /> Supply Chain Solutions
          </div>
          <div className="intelligent-supply-subtitle">
            OptimalShip can provide your company with the most efficient shipping support.
          </div>
          <div className="intelligent-supply-list-header">We can offer you:</div>
          <ul>
            <li>Substantial Discounts</li>
            <li>International and Domestic Services</li>
            <li>Friendly and Helpful Customer Service Team</li>
            <li>Dedicated Account Managers</li>
            <li>Customized Invoicing</li>
            <li>Shipment Tracking</li>
            <li>Easy to Use Online Shipping Tools</li>
          </ul>
        </div>

        <div className="intelligent-supply-images">
          <div id="intelligent-supply-image">
            <Image src="/images/home/intelligent-supply.png" alt="Intelligent Supply" width={593} height={640} />
            <div className="wave wave-top" />
            <div className="wave wave-bottom" />
          </div>
          <div className="rectangle" />
          <div className="tooltip">
            <div className="quote">
              “From routine shipments to extraordinarily difficult ones each has been done in a courteous, professional
              manner. OptimalShip has stepped outside the box to assist on occasions to communicate and resolve issues
              and non-issues to make deliveries happen. Thank you for taking care of your customers without us having to
              work with outsourced departments from other entities.”
            </div>
            <div className="author">Larry Dube, Axciton</div>
          </div>
        </div>
      </div>
    );
  }

  function render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle} - Home</title>
        </Head>

        {intelligentSupplyChainSolutions()}
      </Layout>
    );
  }

  return render();
}

export default Home;
