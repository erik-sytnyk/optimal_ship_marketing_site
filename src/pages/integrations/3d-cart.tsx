import Head from 'next/head';

import Layout, {siteTitle} from 'src/components/common/Layout/Layout';

import Cart from 'src/components/integrations/3d_cart/3DCart';

function CartPage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - 3DCart</title>
      </Head>

      <Cart />
    </Layout>
  );
}

export default CartPage;
