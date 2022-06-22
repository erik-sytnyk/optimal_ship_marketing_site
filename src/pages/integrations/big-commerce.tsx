import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import BigCommerce from 'src/components/integrations/big_commerce/BigCommerce';

function BigCommercePage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - BigCommerce</title>
      </Head>

      <BigCommerce />
    </Layout>
  );
}

export default BigCommercePage;
