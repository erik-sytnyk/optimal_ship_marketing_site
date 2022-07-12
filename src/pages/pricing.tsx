import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import Intro from 'src/components/pricing/intro/Intro';
import Offer from 'src/components/pricing/offer/Offer';
import Partners from 'src/components/pricing/partners/Partners';
import FAQ from 'src/components/pricing/faq/Faq';

function Pricing() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - Pricing`}</title>
      </Head>

      <Intro />
      <Offer />
      <Partners />
      <FAQ />
    </Layout>
  );
}

export default Pricing;
