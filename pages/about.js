import Head from 'next/head';

import Layout, {siteTitle} from '../components/layout';

import OptimalShipStory from '../components/templates/about/optimal_ship_story/OptimalShipStory';
import OurPrinciples from '../components/templates/about/our_principles/OurPrinciples';

function About() {
  function render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle} - About Us</title>
        </Head>

        <OptimalShipStory />
        <OurPrinciples />
      </Layout>
    );
  }

  return render();
}

export default About;
