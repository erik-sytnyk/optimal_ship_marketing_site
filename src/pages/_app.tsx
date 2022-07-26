import Script from 'next/script';

import config from 'src/config';

import '../styles/index.scss';

function MyApp({Component, pageProps}) {
  const heapId = config.heapId;
  const googleId = config.googleAnalyticsId;

  return (
    <>
      <Script src="/__ENV.js" strategy="afterInteractive" />
      {googleId && (
        <>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`} />
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleId}', {
              page_path: window.location.pathname,
              });
            `}
          </Script>
          )
        </>
      )}
      {heapId && (
        <Script id="analytics" strategy="afterInteractive">
          {`window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
      heap.load('${heapId}');`}
        </Script>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
