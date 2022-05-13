import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import UnderConstruction from 'src/components/common/UnderConstruction';

function TermsOfService() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Terms Of Service</title>
      </Head>

      <UnderConstruction />
    </Layout>
  );
}

export default TermsOfService;
