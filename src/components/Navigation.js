import {NavLink, useNavigate} from 'react-router-dom';
import classNames from 'classnames';
import {useState} from 'react';

import config from '../config';

import SearchInput from './common/SearchInput';

function Navigation() {
  const navigate = useNavigate();

  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function navigateToHomePage() {
    navigate('/');
  }

  function navigateToOldWebsite() {
    window.open(config.oldWebSiteUrl, '_blank');
  }

  function renderOldWebsiteButton() {
    return (
      <div className="old-website-button" onClick={navigateToOldWebsite}>
        Take me to old Website
        <img src="./images/airship.png" alt="Old Website" />
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
      <div className="nav-links">
        <NavLink to="/about-us" onClick={() => toggleMenu()}>
          About us
        </NavLink>
        <NavLink to="/services" onClick={() => toggleMenu()}>
          Services
        </NavLink>
        <NavLink to="/pricing" onClick={() => toggleMenu()}>
          Pricing
        </NavLink>
        <NavLink to="/support" onClick={() => toggleMenu()}>
          Support
        </NavLink>
      </div>
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
          {menuVisible ? (
            <img src="./images/close.png" alt="Close" />
          ) : (
            <img src="./images/hamburger.png" alt="Toggler" />
          )}
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
          <img src="./images/logo.png" alt="Logo" />
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
