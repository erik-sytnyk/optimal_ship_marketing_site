import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import Shopify from 'src/components/integrations/shopify/Shopify';

function ShopifyPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Shopify</title>
      </Head>

      <Shopify />
    </Layout>
  );
}

export default ShopifyPage;
