import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import Woocommerce from 'src/components/integrations/woocommerce/Woocommerce';

function WoocommercePage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Woocommerce</title>
      </Head>

      <Woocommerce />
    </Layout>
  );
}

export default WoocommercePage;
