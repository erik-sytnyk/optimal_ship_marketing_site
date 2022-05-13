import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import UnderConstruction from 'src/components/common/UnderConstruction';

function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Privacy Policy</title>
      </Head>

      <UnderConstruction />
    </Layout>
  );
}

export default PrivacyPolicy;
