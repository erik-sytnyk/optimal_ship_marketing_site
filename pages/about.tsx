import Head from 'next/head';

import Layout, {siteTitle} from '../components/layout';
import DigitalTools from '../components/templates/common/digital_tools/DigitalTools';

import OptimalShipStory from '../components/templates/about/optimal_ship_story/OptimalShipStory';
import OurPrinciples from '../components/templates/about/our_principles/OurPrinciples';
import LeadershipTeam from '../components/templates/about/leadership_team/LeadershipTeam';

function About() {
  function render() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle} - About Us</title>
        </Head>

        <OptimalShipStory />
        <OurPrinciples />
        <LeadershipTeam />
        <DigitalTools />
      </Layout>
    );
  }

  return render();
}

export default About;
