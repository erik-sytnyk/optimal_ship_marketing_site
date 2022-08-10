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

  function navigateToHomePage() {
    router.push('/');
  }

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function navigateToTools(toolName: string) {
    window.open(config.onlineTools[toolName], '_blank');
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
          We have recently redesigned our website, <br /> but would you rather use the old one?
          <br />
          <b>No problem, you can still use it here!</b>
        </styled.oldWebsiteTooltip>
      </styled.oldWebsiteButton>
    );
  }

  function renderToolsButton() {
    return (
      <styled.dropdownWrapper>
        <styled.dropdownButton onClick={() => navigateToTools('home')}>
          Start Shipping
          <styled.boxIcon>
            <Image src="/images/box.ico" alt="Cardboard box" width="28" height="28" layout="fixed" />
          </styled.boxIcon>
        </styled.dropdownButton>
        <styled.dropDown>{renderToolsLinks()}</styled.dropDown>
      </styled.dropdownWrapper>
    );
  }

  function renderToolLink(path: string, label: string) {
    return (
      <styled.toolLink>
        <styled.dropDownLink onClick={() => navigateToTools(path)}>{label}</styled.dropDownLink>
      </styled.toolLink>
    );
  }

  function renderToolsLinks() {
    return (
      <styled.toolLinks>
        {renderToolLink('quote', 'Get Quote')}
        {renderToolLink('shipment', 'Prepare Shipment')}
        {renderToolLink('bill', 'Pay Bill')}
        {renderToolLink('pickup', 'Schedule Pickup')}
      </styled.toolLinks>
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

  function renderNavigationButton() {
    return (
      <styled.dropdownWrapper>
        <styled.dropdownButton onClick={navigateToHomePage}>
          Navigation
        </styled.dropdownButton>
        <styled.dropDown>{renderNavLinks()}</styled.dropDown>
      </styled.dropdownWrapper>
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
              {renderToolsLinks()}
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
          <Image src={logoImage} alt="Logo" width={158} height={30} layout="fixed" />
        </styled.logo>

        <styled.searchContainer>{renderToolsButton()}</styled.searchContainer>

        <styled.navButtonContainer>{renderNavigationButton()}</styled.navButtonContainer>

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
