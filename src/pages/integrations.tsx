import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import IntegrationsComponent from 'src/components/integrations/Integrations';

function Integrations() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - Integrations`}</title>
      </Head>

      <IntegrationsComponent />
    </Layout>
  );
}

export default Integrations;
