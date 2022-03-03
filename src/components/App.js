import {Routes, Route} from 'react-router-dom';

import AppPage from './common/AppPage';

function App(props) {
  function renderRoute(route, index) {
    const {pageProps, component: Component} = route;

    const render = (
      <AppPage {...pageProps}>
        <Component {...props} />
      </AppPage>
    );

    return <Route key={index} path={route.path} element={render} />;
  }

  return (
    <>
      <Routes>{props.routes.map((route, index) => renderRoute(route, index))}</Routes>
      {props.children}
    </>
  );
}

export default App;
