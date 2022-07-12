import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import ContactUs from 'src/components/contact/ContactUs';

function Contact() {
  return (
    <Layout>
      <Head>
        <title>{`${siteTitle} - Contact Us`}</title>
      </Head>

      <ContactUs />
    </Layout>
  );
}

export default Contact;
