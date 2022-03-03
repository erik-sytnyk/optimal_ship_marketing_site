import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <div>OptimalShip</div>

      <Link to="/about-us">About us</Link>
      <Link to="/services">Services</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/support">Support</Link>
    </div>
  );
}

export default Navigation;
