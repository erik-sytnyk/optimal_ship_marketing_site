import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import EasyCart from 'src/components/integrations/easy-cart/EasyCart';

function EasyCartPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - EasyCart</title>
      </Head>

      <EasyCart />
    </Layout>
  );
}

export default EasyCartPage;
