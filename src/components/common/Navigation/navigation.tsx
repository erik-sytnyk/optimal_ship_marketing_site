import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useState} from 'react';

import config from 'src/config';

import SearchInput from '../SearchInput/searchInput';

import logoImage from 'public/images/logo.png';
import closeImage from 'public/images/close.png';
import hamburgerImage from 'public/images/hamburger.png';

import * as styled from './Navigation.styled';

function Navigation() {
  const router = useRouter();

  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function navigateToHomePage() {
    router.push('/');
  }

  function navigateToOldWebsite() {
    window.open(config.oldWebSiteUrl, '_blank');
  }

  function renderOldWebsiteButton() {
    return (
      <styled.oldWebsiteButton onClick={navigateToOldWebsite}>
        Take me to old website
        <styled.icon>
          <Image src="/images/airship.png" alt="Old Website" width="56" height="56" layout="fixed" />
        </styled.icon>
        <styled.oldWebsiteTooltip>
          We have currently redesigned our website <br /> but you would rather still use old one?
          <br />
          <b>
            No problem, you can still use the old <br /> one!
          </b>
        </styled.oldWebsiteTooltip>
      </styled.oldWebsiteButton>
    );
  }

  function renderNavLinks() {
    return (
      <styled.navLinks>
        <styled.navLink active={router.pathname === '/about' ? true : false}>
          <Link href="/about" passHref>
            <styled.link onClick={() => toggleMenu()}>About Us</styled.link>
          </Link>
        </styled.navLink>
        <styled.navLink active={router.pathname === '/services' ? true : false}>
          <Link href="/services" passHref>
            <styled.link onClick={() => toggleMenu()}>Services</styled.link>
          </Link>
        </styled.navLink>
        <styled.navLink active={router.pathname === '/pricing' ? true : false}>
          <Link href="/pricing" passHref>
            <styled.link onClick={() => toggleMenu()}>Pricing</styled.link>
          </Link>
        </styled.navLink>
        <styled.navLink active={router.pathname === '/support' ? true : false}>
          <Link href="/support" passHref>
            <styled.link onClick={() => toggleMenu()}>Support</styled.link>
          </Link>
        </styled.navLink>
      </styled.navLinks>
    );
  }

  function renderMobileNavigation() {
    return (
      <>
        <styled.toggler onClick={toggleMenu}>
          {menuVisible ? <Image src={closeImage} alt="Close" /> : <Image src={hamburgerImage} alt="Toggler" />}
        </styled.toggler>

        {menuVisible && (
          <styled.navMenu visible={menuVisible}>
            <styled.navMenuContainer>
              <SearchInput />
              {renderNavLinks()}
            </styled.navMenuContainer>
          </styled.navMenu>
        )}
      </>
    );
  }

  function render() {
    return (
      <styled.nav>
        <styled.logo onClick={navigateToHomePage}>
          <Image src={logoImage} alt="Logo" width={170} height={29} layout="fixed" />
        </styled.logo>

        <styled.navCollapse>{renderNavLinks()}</styled.navCollapse>

        <styled.searchContainer>
          {renderOldWebsiteButton()}
          <SearchInput />
        </styled.searchContainer>

        {renderMobileNavigation()}
      </styled.nav>
    );
  }

  return render();
}

export default Navigation;
