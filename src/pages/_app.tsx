import Script from 'next/script';

import '../styles/index.scss';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Script src="/__ENV.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
