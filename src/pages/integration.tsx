import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import UnderConstruction from 'src/components/common/UnderConstruction';

function Integration() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Integration</title>
      </Head>

      <UnderConstruction />
    </Layout>
  );
}

export default Integration;
