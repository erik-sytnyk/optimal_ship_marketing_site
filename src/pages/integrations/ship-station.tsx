import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import ShipStation from 'src/components/integrations/ship_station/ShipStation';

function ShipStationPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Ship Station</title>
      </Head>

      <ShipStation />
    </Layout>
  );
}

export default ShipStationPage;
