import Head from 'next/head';
import {createClient} from '../prismicio';
import Image from 'next/image';

import Layout, {siteTitle} from '../components/layout';

function About(props) {
  const data = props?.page?.data;
  console.log(data);

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - About</title>
      </Head>

      <h2>About Page</h2>

      {data['about-item'].map((item, index) => {
        const image = item.image;

        return (
          <div key={index}>
            <h3>{item.title[0].text}</h3>
            <p>{item.description[0].text}</p>
            <Image
              src={image?.url}
              alt={image?.alt}
              width={image?.dimensions?.width}
              height={image?.dimensions?.height}
            />
          </div>
        );
      })}
    </Layout>
  );
}

export default About;

export async function getStaticProps({previewData}) {
  const client = createClient({previewData});

  const page = await client.getSingle('about');

  return {
    props: {page} // Will be passed to the page component as props
  };
}
