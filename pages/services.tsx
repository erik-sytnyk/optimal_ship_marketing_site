import Head from 'next/head';
import {createClient} from '../prismicio';
import Image from 'next/image';

import Layout, {siteTitle} from '../components/layout';

function Services(props) {
  const homeData = props?.homePage?.data;
  const aboutData = props?.aboutPage?.data;

  const homeImage = homeData?.image;

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Services</title>
      </Head>

      <h2>About Page</h2>

      <div>{homeData?.title[0]?.text}</div>
      <div>{homeData?.subtitle[0]?.text}</div>
      <Image
        src={homeImage?.url}
        alt={homeImage?.alt}
        width={homeImage?.dimensions?.width}
        height={homeImage?.dimensions?.height}
      />

      <br />

      {aboutData['about-item'].map((item, index) => {
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

export default Services;

export async function getStaticProps({previewData}) {
  const client = createClient({previewData});

  const homePage = await client.getSingle('home');
  const aboutPage = await client.getSingle('about');

  return {
    props: {
      homePage,
      aboutPage
    }
  };
}
