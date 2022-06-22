import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import ZenCart from 'src/components/integrations/zen_cart/ZenCart';

function ZenCartPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Zen Cart</title>
      </Head>

      <ZenCart />
    </Layout>
  );
}

export default ZenCartPage;
