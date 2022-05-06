import Head from 'next/head';
import {createClient} from '../../prismicio';
import Image from 'next/image';

import Layout, {siteTitle} from 'src/components/common/layout';

function Support(props) {
  const homeData = props?.homePage?.data;
  const aboutData = props?.aboutPage?.data;

  const homeImage = homeData?.image;

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Support</title>
      </Head>

      <h2>Support Page</h2>

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

export default Support;

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
