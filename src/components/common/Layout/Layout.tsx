import Head from 'next/head';

import Navigation from '../Navigation';
import Footer from '../Footer';

import * as styled from './Layout.styled';

export const siteTitle = 'OptimalShip';

function Layout({children}) {
  return (
    <styled.wrapper id="root">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <styled.content>{children}</styled.content>

      <Footer />
    </styled.wrapper>
  );
}

export default Layout;