import {Helmet, HelmetProvider} from 'react-helmet-async';

import Navigation from '../Navigation';
import Footer from '../Footer';

function AppPage(props) {
  function getTitle() {
    return props.title ? `OptimalShip - ${props.title}` : 'OptimalShip';
  }

  const title = getTitle();

  return (
    <>
      <HelmetProvider>
        <Helmet title={title} />
      </HelmetProvider>

      <Navigation />

      <div className="content">{props.children}</div>

      <Footer />
    </>
  );
}

export default AppPage;
