function Footer() {
  function renderLocations() {
    return (
      <div className="location">
        <div className="location-item">
          <img src="./images/footer/box.png" alt="Optimal Logistics LLC" />
          Optimal Logistics LLC
        </div>
        <div className="location-item">
          <img src="./images/footer/map-pin.png" alt="PO BOX 1779" />
          PO BOX 1779
        </div>
        <div className="location-item">
          <img src="./images/footer/map.png" alt="Allen, TX 75013-0030" />
          Allen, TX 75013-0030
        </div>
        <div className="location-item">
          <img src="./images/footer/phone.png" alt="(972) 383-9901" />
          (972) 383-9901
        </div>
        <div className="location-item">
          <img src="./images/footer/mail.png" alt="customerservice@optimalship.com" />
          customerservice@optimalship.com
        </div>
      </div>
    );
  }

  function render() {
    return (
      <footer>
        <div className="details">
          <div className="footer-title">OptimalShip</div>

          {renderLocations()}

          <div className="social-media">
            OptimalShip on Social media:
            <div className="social-icons">
              <img src="./images/footer/facebook.png" alt="Facebook" />
              <img src="./images/footer/instagram.png" alt="Instagram" />
              <img src="./images/footer/linkedin.png" alt="LinkedIn" />
            </div>
          </div>
        </div>

        <div className="sitemap">
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

        <div className="tools"></div>
        <div className="legal"></div>
      </footer>
    );
  }

  return render();
}

export default Footer;
