import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import Magento from 'src/components/integrations/magento/Magento';

function MagentoPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Magento 1.9</title>
      </Head>

      <Magento />
    </Layout>
  );
}

export default MagentoPage;
