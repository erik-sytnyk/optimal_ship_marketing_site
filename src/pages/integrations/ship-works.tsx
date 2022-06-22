import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import ShipWorks from 'src/components/integrations/ship_works/ShipWorks';

function ShipWorksPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Shipworks</title>
      </Head>

      <ShipWorks />
    </Layout>
  );
}

export default ShipWorksPage;
