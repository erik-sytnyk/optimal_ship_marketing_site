import '../styles/index.scss';

import Link from 'next/link';
import {PrismicProvider} from '@prismicio/react';
import {PrismicPreview} from '@prismicio/next';
import {linkResolver, repositoryName} from '../prismicio';

function MyApp({Component, pageProps}) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({href, children, ...props}) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default MyApp;
