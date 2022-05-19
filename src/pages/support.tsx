import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import SupportFQA from 'src/components/support/Support';

function Support() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Support</title>
      </Head>

      <SupportFQA />
    </Layout>
  );
}

export default Support;
