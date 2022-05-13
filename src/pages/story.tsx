import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import UnderConstruction from 'src/components/common/UnderConstruction';

function Story() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Story</title>
      </Head>

      <UnderConstruction />
    </Layout>
  );
}

export default Story;
