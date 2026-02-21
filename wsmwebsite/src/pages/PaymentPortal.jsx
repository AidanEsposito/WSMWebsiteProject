import React from 'react';
import { Link } from 'react-router-dom';
import '../design/PaymentPortal.css';

function PaymentPortal() {
  return (
    <div>
      
      <header className="header">
        <div className="header-left">
          <Link to="/">
            <img src="wsmlogo2.avif" alt="WSM Logo" />
          </Link>
        </div>

        <nav className="header-right">
          <Link to="/about">About</Link>
          <Link to="/facility-features">Facility Features</Link>
          <Link to="/receiving-service">Receiving Service</Link>
          <Link to="/storage-faq">Storage + FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/payment-portal">Member Portal</Link>
          <Link to="/blog">Blog</Link>
          <a href="#friends-of-wsm">Friends of WSM</a>
        </nav>
      </header>

      
      <div className="payment-portal">
        <div className="payment-portal-header">
          <h1>WSM MEMBER PORTAL ACCESS</h1>
        </div>

        <div className="payment-portal-content">
          <div className="MDR-text">
            <h2>Culver City / Marina Del Rey</h2>
            <p>Near the 405 / 90 FWY</p>
          </div>
          <div className="RB-text">
            <h2>Redondo Beach</h2>
            <p>Near Redondo Beach & 190th Street</p>
          </div>
          <div className="PDR-text">
            <h2>Playa Del Rey</h2>
            <p>Near The Beach</p>
          </div>
          <div className="WLA-text">
            <h2>West LA</h2>
            <p>Near Sony Studios</p>
          </div>
          <div className="SF-text">
            <h2>South Beach Rincon Hill-SF</h2>
            <p>Near Brannan & 2nd</p>
          </div>

          <div className="Access-text">
            <h2>Having Issues Accessing?</h2>
            <p>CALL WSM AT: 310-869-1011</p>
          </div>
        </div>
      </div>

      
      <section className="resources">
        <div className="resources-inner">
          <div className="resources-left">
            <h3 className="in-touch">Get In Touch With Us</h3>
            <p className="visit-info">
              Visit our contact page to schedule your private tour and see what
              WSM can do for your collection.
            </p>

            <div className="socials">
              <a href="https://www.winestoragemanagement.com/">
                <img src="wsmlogo.jpg" alt="WSM Website" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61559815106121">
                <img src="wsmfacebook.avif" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/winestoragemanagement/">
                <img src="wsminsta.avif" alt="Instagram" />
              </a>
              <a href="https://www.yelp.com/biz/wine-storage-matters-los-angeles-2">
                <img src="wsmyelp.avif" alt="Yelp" />
              </a>
            </div>

            <h4 className="phone-number">310-869-1011</h4>
          </div>

          <div className="quick-links">
            <h5>Quick Links</h5>
            <a>Home</a>
            <a>About</a>
            <a>Facility Features</a>
            <a>Storage</a>
            <a>Blog</a>
            <a>Contact</a>
          </div>
        </div>
      </section>

      
      <footer className="footer">
        <p>© 2026 Wine Storage Management — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PaymentPortal;
