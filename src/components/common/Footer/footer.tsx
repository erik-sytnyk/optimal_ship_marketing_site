import Image from 'next/image';
import Link from 'next/link';

import config from 'src/config';

import boxImage from 'public/images/footer/box.png';
import mapPinImage from 'public/images/footer/map-pin.png';
import mapImage from 'public/images/footer/map.png';
import phoneImage from 'public/images/footer/phone.png';
import mailImage from 'public/images/footer/mail.png';
import facebookImage from 'public/images/footer/facebook.png';
import instagramImage from 'public/images/footer/instagram.png';
import linkedinImage from 'public/images/footer/linkedin.png';
import trustBadgeImage from 'public/images/footer/trust-badge.png';

import * as styled from './Footer.styled';

function Footer() {
  function renderLocation() {
    return (
      <styled.location>
        <styled.locationItem>
          <styled.locationIcon>
            <Image src={boxImage} alt="Optimal Logistics LLC" />
          </styled.locationIcon>
          Optimal Logistics LLC
        </styled.locationItem>

        <styled.locationItem>
          <styled.locationIcon>
            <Image src={mapPinImage} alt="PO BOX 1779" />
          </styled.locationIcon>
          PO BOX 1779
        </styled.locationItem>

        <styled.locationItem>
          <styled.locationIcon>
            <Image src={mapImage} alt="Allen, TX 75013-0030" />
          </styled.locationIcon>
          Allen, TX 75013-0030
        </styled.locationItem>

        <styled.locationItem>
          <styled.locationIcon>
            <Image src={phoneImage} alt="(972) 383-9901" />
          </styled.locationIcon>
          (972) 383-9901
        </styled.locationItem>

        <styled.locationItem>
          <styled.locationIcon>
            <Image src={mailImage} alt="customerservice@optimalship.com" />
          </styled.locationIcon>
          customerservice@optimalship.com
        </styled.locationItem>
      </styled.location>
    );
  }

  function renderTrustBadge() {
    return <Image src={trustBadgeImage} alt="Trust badge" priority={true} />;
  }

  function render() {
    return (
      <styled.footer>
        <styled.column>
          <styled.header>OptimalShip</styled.header>

          {renderLocation()}

          <styled.socialMedia>
            OptimalShip on Social Media:
            <styled.socialIcons className="social-icons">
              <styled.socialIcon href={config.socialMedia.facebook} target="_blank" rel="noreferrer">
                <Image src={facebookImage} alt="Facebook" />
              </styled.socialIcon>

              <styled.socialIcon href={config.socialMedia.instagram} target="_blank" rel="noreferrer">
                <Image src={instagramImage} alt="Instagram" />
              </styled.socialIcon>

              <styled.socialIcon href={config.socialMedia.linkedIn} target="_blank" rel="noreferrer">
                <Image src={linkedinImage} alt="LinkedIn" />
              </styled.socialIcon>
            </styled.socialIcons>
          </styled.socialMedia>
        </styled.column>

        <styled.column>
          <styled.title>Sitemap</styled.title>
          <styled.list>
            <styled.listItem>
              <Link href="/about">About Us</Link>
            </styled.listItem>
            <styled.listItem>
              <Link href="/careers">Careers</Link>
            </styled.listItem>
            <styled.listItem>
              <Link href="/services">Services</Link>
            </styled.listItem>
            <styled.listItem>
              <Link href="/pricing">Pricing</Link>
            </styled.listItem>
            <styled.listItem>
              <Link href="/integrations">Integrations</Link>
            </styled.listItem>
            <styled.listItem>
              <Link href="/contact">Contact Us</Link>
            </styled.listItem>
            <styled.listItem>
              <Link href="/support">FAQs</Link>
            </styled.listItem>
            <styled.listItem>
              <a href={config.onlineTools.createAccount} target="_blank" rel="noreferrer">
                Create an Account
              </a>
            </styled.listItem>
          </styled.list>
        </styled.column>

        <styled.column>
          <styled.title>Helpful Tools</styled.title>
          <styled.list>
            <styled.listItem>
              <a href={config.onlineTools.shipment} target="_blank" rel="noreferrer">
                Free Shipment Prep Tool
              </a>
            </styled.listItem>
            <styled.listItem>
              <a href={config.onlineTools.quote} target="_blank" rel="noreferrer">
                Free Quote Tool
              </a>
            </styled.listItem>
            <styled.listItem>
              <a href={config.onlineTools.bill} target="_blank" rel="noreferrer">
                Online Bill Pay
              </a>
            </styled.listItem>
            <styled.listItem>
              <a href={config.onlineTools.pickup} target="_blank" rel="noreferrer">
                Pickup Scheduler
              </a>
            </styled.listItem>
          </styled.list>
          <styled.badgeContainerDesktop>{renderTrustBadge()}</styled.badgeContainerDesktop>
        </styled.column>

        <styled.column>
          <styled.title>Legal</styled.title>
          <styled.list>
            <styled.listItem>
              <Link href="/terms-of-service">Terms of Service</Link>
            </styled.listItem>
            <styled.listItem>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </styled.listItem>
            <styled.listItemHidden />
          </styled.list>
          <styled.businessOwner>&#10086; Woman-Owned Business</styled.businessOwner>
        </styled.column>

        <styled.badgeContainerMobile>{renderTrustBadge()}</styled.badgeContainerMobile>
      </styled.footer>
    );
  }

  return render();
}

export default Footer;
