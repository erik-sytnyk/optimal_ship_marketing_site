import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/layout';

import TermsOfServicesComponent from 'src/components/terms_of_services/TermsOfServices';

function TermsOfService() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Terms Of Service</title>
      </Head>

      <TermsOfServicesComponent />
    </Layout>
  );
}

export default TermsOfService;
