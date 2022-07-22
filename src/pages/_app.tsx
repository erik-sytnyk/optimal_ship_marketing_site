import '../styles/index.scss';
import Script from 'next/script';

function MyApp({Component, pageProps}) {
  const heapId = process.env.NEXT_PUBLIC_HEAP_ID;
  console.log(heapId);

  return (
    <>
      <Script src="/__ENV.js" strategy="afterInteractive" />
      {heapId && (
        <Script id="analytics" strategy="afterInteractive">
          {`window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
      heap.load(${heapId});`}
        </Script>
      )}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
