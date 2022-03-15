import Head from 'next/head';
import Image from 'next/image';
import {createClient} from '../prismicio';

import Layout, {siteTitle} from '../components/layout';

function Home(props) {
  const data = props?.page?.data;
  const image = data?.image;

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Home</title>
      </Head>

      <h2>Home Page</h2>
      <div>{data?.title[0]?.text}</div>
      <div>{data?.subtitle[0]?.text}</div>
      <Image src={image?.url} alt={image?.alt} width={image?.dimensions?.width} height={image?.dimensions?.height} />
    </Layout>
  );
}

export default Home;

export async function getStaticProps({previewData}) {
  const client = createClient({previewData});

  const page = await client.getSingle('home');

  return {
    props: {page} // Will be passed to the page component as props
  };
}
