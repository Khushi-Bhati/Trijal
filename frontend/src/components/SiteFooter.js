import React from "react";
import "./../styles/SiteFooter.css";
import logo from "./../assets/trijal_logo.png";

const Icon = ({ path, viewBox = "0 0 24 24" }) => (
  <svg
    className="footer__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-hidden="true"
    focusable="false"
  >
    <path d={path} />
  </svg>
);

const SiteFooter = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={logo} alt="Trijal logo" />
            <p>We Work For Excellence</p>
          </div>

        <div className="footer__columns">
          <div className="footer__col">
            <h4>Service</h4>
            <ul>
              <li>Schneider prisma panels</li>
              <li>Power distribution panels</li>
              <li>Electrical Consultancy</li>
              <li>EPC Services</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>Blogs</li>
              <li>Gallery</li>
              <li>Certificates</li>
              <li>About Us</li>
              <li>Career</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer__col footer__contact">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <Icon path="M6.62 10.79a15.06 15.06 0 006.59 6.59l1.87-1.87a1 1 0 011.01-.24 11.72 11.72 0 003.68.59 1 1 0 011 1v3.11a1 1 0 01-.91 1A16 16 0 013 5.91a1 1 0 011-.91H7.1a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.01z" />
                <div className="footer__contact-text">
                  +91-8588878612, +91-8588878600
                </div>
              </li>
              <li>
                <Icon path="M20 6.18v11.64A2.18 2.18 0 0117.82 20H6.18A2.18 2.18 0 014 17.82V6.18A2.18 2.18 0 016.18 4h11.64A2.18 2.18 0 0120 6.18zm-2 .24L12 11.22 6 6.42v11.4h12zM6.88 6h10.24L12 10.39z" />
                <div className="footer__contact-text">
                  sales@trijal.com,
                  <br />
                  contact@trijal.com
                </div>
              </li>
              <li>
                <Icon path="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7zm0 9.5a2.5 2.5 0 10-2.5-2.5 2.5 2.5 0 002.5 2.5z" />
                <div className="footer__contact-text">
                  Faridabad Office : C/o- &amp; Work, Plot No. 5B, Sector 15-A,
                  <br />
                  First Floor, Crown Plaza Mall, Faridabad.-121007
                </div>
              </li>
              <li>
                <Icon path="M12 2a7 7 0 017 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 017-7zm0 9.5a2.5 2.5 0 10-2.5-2.5 2.5 2.5 0 002.5 2.5z" />
                <div className="footer__contact-text">
                  Alwar Works : F-642, MATSAYA INDUSTRIAL AREA, ALWAR -301030,
                  <br />
                  RAJASTHAN
                </div>
              </li>
              <li>
                <Icon path="M12 6a1 1 0 011 1v4.13l2.72 1.57a1 1 0 11-1 1.74L11.5 12.7a1 1 0 01-.5-.87V7a1 1 0 011-1zm0-4a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                <div className="footer__contact-text">
                  9:00 AM - 5:30 PM (Mon - Sat)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

        <div className="footer__bottom">
          <span>All Copyright Reserved @2024</span>
          <div className="footer__policies">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
