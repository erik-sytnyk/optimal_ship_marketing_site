import Head from 'next/head';

import Layout, {siteTitle} from '../components/layout';

function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - About</title>
      </Head>

      <h2>About Page</h2>
    </Layout>
  );
}

export default About;
