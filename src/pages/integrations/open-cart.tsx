import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import OpenCart from 'src/components/integrations/open_cart/OpenCart';

function OpenCartPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - OpenCart</title>
      </Head>

      <OpenCart />
    </Layout>
  );
}

export default OpenCartPage;
