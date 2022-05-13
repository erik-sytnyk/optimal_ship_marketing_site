import Image from 'next/image';
import Link from 'next/link';

import boxImage from 'public/images/footer/box.png';
import mapPinImage from 'public/images/footer/map-pin.png';
import mapImage from 'public/images/footer/map.png';
import phoneImage from 'public/images/footer/phone.png';
import mailImage from 'public/images/footer/mail.png';
import facebookImage from 'public/images/footer/facebook.png';
import instagramImage from 'public/images/footer/instagram.png';
import linkedinImage from 'public/images/footer/linkedin.png';
import trustBadgeImage from 'public/images/footer/trust-badge.png';

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
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/integration">Integrations</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/support">FAQs</Link>
            </li>
            <li>
              <a href="https://portal.optimalship.com/dashboard" target="_blank" rel="noreferrer">
                Create an account
              </a>
            </li>
          </ul>
        </div>

        <div className="tools footer-column">
          <div className="footer-header">Helpfull Tools</div>
          <ul>
            <li>
              <a href="https://portal.optimalship.com/dashboard" target="_blank" rel="noreferrer">
                Free Shipment Prep Tool
              </a>
            </li>
            <li>
              <a href="https://portal.optimalship.com/dashboard" target="_blank" rel="noreferrer">
                Quote Tool
              </a>
            </li>
            <li>
              <a href="https://portal.optimalship.com/dashboard" target="_blank" rel="noreferrer">
                Pay Bill Online
              </a>
            </li>
            <li>
              <a href="https://portal.optimalship.com/dashboard" target="_blank" rel="noreferrer">
                Pickup scheduler
              </a>
            </li>
          </ul>
          <div className="trust-badge-container-desktop">{renderTrustBadge()}</div>
        </div>

        <div className="legal footer-column">
          <div className="footer-header">Legal</div>
          <ul>
            <li>
              <Link href="/terms-of-service">Terms Of Service</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy policy</Link>
            </li>
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
