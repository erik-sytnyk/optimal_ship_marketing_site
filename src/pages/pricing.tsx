import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import Intro from 'src/components/pricing/intro/Intro';

function Pricing() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Pricing</title>
      </Head>

      <Intro />
    </Layout>
  );
}

export default Pricing;
