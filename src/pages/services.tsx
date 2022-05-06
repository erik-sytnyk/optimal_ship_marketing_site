import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import ShippingExperience from 'src/components/services/shipping_experience/ShippingExperience';
import HowItWorks from 'src/components/common/HowItWorks';
import PreparationTools from 'src/components/services/preparation_tools/PreparationTools';

function Services() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Services</title>
      </Head>

      <ShippingExperience />

      <HowItWorks pageId="services" />

      <PreparationTools />
    </Layout>
  );
}

export default Services;
