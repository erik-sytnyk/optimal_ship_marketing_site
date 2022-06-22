import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import ShippingEasy from 'src/components/integrations/shipping_easy/ShippingEasy';

function ShippingEasyPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - ShippingEasy</title>
      </Head>

      <ShippingEasy />
    </Layout>
  );
}

export default ShippingEasyPage;
