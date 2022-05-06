import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import ShippingExperience from 'src/components/services/shipping_experience/ShippingExperience';

function Services() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Services</title>
      </Head>

      <ShippingExperience />
    </Layout>
  );
}

export default Services;
