import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';
import DigitalTools from 'src/components/common/DigitalTools';

import OptimalShipStory from 'src/components/about/optimal_ship_story/OptimalShipStory';
import OurPrinciples from 'src/components/about/our_principles/OurPrinciples';
import LeadershipTeam from 'src/components/about/leadership_team/LeadershipTeam';
import CustomersStories from 'src/components/about/customers_stories/CustomersStories';

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
        <CustomersStories />
      </Layout>
    );
  }

  return render();
}

export default About;
