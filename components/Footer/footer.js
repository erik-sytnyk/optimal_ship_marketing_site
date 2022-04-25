import Image from 'next/image';

import boxImage from '../../public/images/footer/box.png';
import mapPinImage from '../../public/images/footer/map-pin.png';
import mapImage from '../../public/images/footer/map.png';
import phoneImage from '../../public/images/footer/phone.png';
import mailImage from '../../public/images/footer/mail.png';
import facebookImage from '../../public/images/footer/facebook.png';
import instagramImage from '../../public/images/footer/instagram.png';
import linkedinImage from '../../public/images/footer/linkedin.png';
import trustBadgeImage from '../../public/images/footer/trust-badge.png';

function Footer() {
  function renderLocations() {
    return (
      <div className="location">
        <div className="location-item">
          <Image src={boxImage} alt="Optimal Logistics LLC" />
          Optimal Logistics LLC
        </div>
        <div className="location-item">
          <Image src={mapPinImage} alt="PO BOX 1779" />
          PO BOX 1779
        </div>
        <div className="location-item">
          <Image src={mapImage} alt="Allen, TX 75013-0030" />
          Allen, TX 75013-0030
        </div>
        <div className="location-item">
          <Image src={phoneImage} alt="(972) 383-9901" />
          (972) 383-9901
        </div>
        <div className="location-item">
          <Image src={mailImage} alt="customerservice@optimalship.com" />
          customerservice@optimalship.com
        </div>
      </div>
    );
  }

  function renderTrustBadge() {
    return <Image src={trustBadgeImage} alt="Trust badge" priority={true} />;
  }

  function render() {
    return (
      <footer>
        <div className="details footer-column">
          <div className="footer-title">OptimalShip</div>

          {renderLocations()}

          <div className="social-media">
            OptimalShip on Social media:
            <div className="social-icons">
              <Image src={facebookImage} alt="Facebook" />
              <Image src={instagramImage} alt="Instagram" />
              <Image src={linkedinImage} alt="LinkedIn" />
            </div>
          </div>
        </div>

        <div className="sitemap footer-column">
          <div className="footer-header">Sitemap</div>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Integrations</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Create an account</li>
          </ul>
        </div>

        <div className="tools footer-column">
          <div className="footer-header">Helpfull Tools</div>
          <ul>
            <li>Free Shipment Prep Tool</li>
            <li>Quote Tool</li>
            <li>Pay Bill Online</li>
            <li>Pickup scheduler</li>
          </ul>
          <div className="trust-badge-container-desktop">{renderTrustBadge()}</div>
        </div>

        <div className="legal footer-column">
          <div className="footer-header">Legal</div>
          <ul>
            <li>Terms Of Service</li>
            <li>Privacy policy</li>
            <li className="hidden" />
          </ul>
          <div className="business-owner">&#10086; Woman Owned business</div>
        </div>

        <div className="trust-badge-container-mobile">{renderTrustBadge()}</div>
      </footer>
    );
  }

  return render();
}

export default Footer;
