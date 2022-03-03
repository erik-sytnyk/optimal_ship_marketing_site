import {Link} from 'react-router-dom';
import {useState} from 'react';

function Navigation() {
  // eslint-disable-next-line
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" />
      </div>

      <div className="nav-collapse">
        <div className="nav-links">
          <Link to="/about-us">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/support">Support</Link>
        </div>
      </div>

      {menuVisible ? (
        <div className="close">
          <img src="./images/close.png" alt="Close" />
        </div>
      ) : (
        <div className="toggler">
          <img src="./images/hamburger.png" alt="Toggler" />
        </div>
      )}
    </nav>
  );
}

export default Navigation;
