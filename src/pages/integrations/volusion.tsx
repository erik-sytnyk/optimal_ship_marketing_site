import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import Volusion from 'src/components/integrations/volusion/Volusion';

function VolusionPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Volusion</title>
      </Head>

      <Volusion />
    </Layout>
  );
}

export default VolusionPage;
