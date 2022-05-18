import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import PrivacyPolicyComponent from 'src/components/privacy_policy/PrivacyPolicy';

function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Privacy Policy</title>
      </Head>

      <PrivacyPolicyComponent />
    </Layout>
  );
}

export default PrivacyPolicy;
