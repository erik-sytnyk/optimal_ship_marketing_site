import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import Ubercart from 'src/components/integrations/ubercart/Ubercart';

function UbercartPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Ubercart</title>
      </Head>

      <Ubercart />
    </Layout>
  );
}

export default UbercartPage;
