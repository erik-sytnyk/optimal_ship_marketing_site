import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import UnderConstruction from 'src/components/common/UnderConstruction';

function Careers() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Careers</title>
      </Head>

      <UnderConstruction />
    </Layout>
  );
}

export default Careers;
