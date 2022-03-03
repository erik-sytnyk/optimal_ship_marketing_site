import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ServicesPage from './components/services/ServicesPage';
import PricingPage from './components/pricing/PricingPage';
import SupportPage from './components/support/SupportPage';

export const routes = [
  {
    path: '/',
    component: HomePage,
    pageProps: {
      title: 'Home'
    }
  },
  {
    path: '/about-us',
    component: AboutPage,
    pageProps: {
      title: 'About Us'
    }
  },
  {
    path: '/services',
    component: ServicesPage,
    pageProps: {
      title: 'Services'
    }
  },
  {
    path: '/pricing',
    component: PricingPage,
    pageProps: {
      title: 'Pricing'
    }
  },
  {
    path: '/support',
    component: SupportPage,
    pageProps: {
      title: 'Support'
    }
  }
];
