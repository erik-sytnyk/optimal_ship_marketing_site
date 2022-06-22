import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import Magento2 from 'src/components/integrations/magento_2/Magento2';

function Magento2Page() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Magento 2.0</title>
      </Head>

      <Magento2 />
    </Layout>
  );
}

export default Magento2Page;
