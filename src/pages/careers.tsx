import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import Careers from 'src/components/careers/intro/Careers';
import Delimiter from 'src/components/careers/delimiter/Delimiter';
import Feedback from 'src/components/careers/feedback/Feedback';

function CareersPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Careers</title>
      </Head>

      <Careers />
      <Delimiter />
      <Feedback />
    </Layout>
  );
}

export default CareersPage;
