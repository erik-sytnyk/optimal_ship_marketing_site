import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import ShippingExperience from 'src/components/services/shipping_experience/ShippingExperience';
import HowItWorks from 'src/components/common/HowItWorks';
import PreparationTools from 'src/components/services/preparation_tools/PreparationTools';
import ServicesList from 'src/components/services/services_list/ServicesList';

function Services() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - Services`}</title>
      </Head>

      <ShippingExperience />

      <HowItWorks pageId="services" />

      <PreparationTools />

      <ServicesList />
    </Layout>
  );
}

export default Services;
