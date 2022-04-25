import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import classNames from 'classnames';
import {useState} from 'react';

import config from '../../config';

import SearchInput from '../SearchInput/searchInput';

import logoImage from '../../public/images/logo.png';
import closeImage from '../../public/images/close.png';
import hamburgerImage from '../../public/images/hamburger.png';

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
    window.open(config.oldWebSiteUrl, '_blank'); //TODO move to config
  }

  function renderOldWebsiteButton() {
    return (
      <div className="old-website-button" onClick={navigateToOldWebsite}>
        Take me to old Website
        <Image src="/images/airship.png" alt="Old Website" width="56" height="56" layout="fixed" />
        <div className="old-website-tooltip">
          We have currently redesigned our website <br /> but you would rather still use old one?
          <br />
          <b>
            No problem, you can still use the old <br /> one!
          </b>
        </div>
      </div>
    );
  }

  function renderNavLinks() {
    return (
      <ul className="nav-links">
        <li className={router.pathname == '/about' ? 'active' : ''}>
          <Link href="/about" onClick={() => toggleMenu()}>
            About us
          </Link>
        </li>
        <li className={router.pathname == '/services' ? 'active' : ''}>
          <Link href="/services" onClick={() => toggleMenu()}>
            Services
          </Link>
        </li>
        <li className={router.pathname == '/pricing' ? 'active' : ''}>
          <Link href="/pricing" onClick={() => toggleMenu()}>
            Pricing
          </Link>
        </li>
        <li className={router.pathname == '/support' ? 'active' : ''}>
          <Link href="/support" onClick={() => toggleMenu()}>
            Support
          </Link>
        </li>
      </ul>
    );
  }

  function renderMobileNavigation() {
    const navMenuClass = classNames({
      'nav-menu': true,
      visible: menuVisible
    });

    return (
      <>
        <div className="toggler" onClick={toggleMenu}>
          {menuVisible ? <Image src={closeImage} alt="Close" /> : <Image src={hamburgerImage} alt="Toggler" />}
        </div>

        {menuVisible && (
          <div className={navMenuClass}>
            <div className="nav-menu-container">
              <SearchInput />
              {renderNavLinks()}
            </div>
          </div>
        )}
      </>
    );
  }

  function render() {
    return (
      <nav className="nav">
        <div className="logo" onClick={navigateToHomePage}>
          <Image src={logoImage} alt="Logo" width={170} height={29} layout="fixed" />
        </div>

        <div className="nav-collapse">{renderNavLinks()}</div>

        <div className="search-container">
          {renderOldWebsiteButton()}
          <SearchInput />
        </div>

        {renderMobileNavigation()}
      </nav>
    );
  }

  return render();
}

export default Navigation;
