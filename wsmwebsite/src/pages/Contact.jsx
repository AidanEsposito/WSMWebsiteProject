import React from 'react';
import { Link } from 'react-router-dom';
import '../design/Contact.css';

function Contact() {
  return (
    <div className="contact">
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
          <Link to="/partners">Friends of WSM</Link>
        </nav>
      </header>

      <div className="contact-us-header">
        <span className="bold-word">Contact</span>
        <span className="normal-word">Us</span>
      </div>

      <div className="inquiry-form">
        <div className="inquiry-header">
          <h2>Inquiry</h2>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="contact-preference">Contact Preference</label>
            <select id="contact-preference" name="contact-preference">
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="call">Call</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="storage-location">Storage Location</label>
            <select id="storage-location" name="storage-location">
              <option value="WLA">West LA</option>
              <option value="PDR">Playa Del Rey</option>
              <option value="SB">South Bay</option>
              <option value="RB">Redondo Beach</option>
              <option value="MDR">Marina Del Rey</option>
              <option value="SBRH">San Francisco</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cases">How Many Cases Are You Looking To Lay Down?</label>
            <input type="number" id="cases" name="cases" min="1" required />
          </div>

          <div className="form-group">
            <label htmlFor="hear-from">How Did You Hear About Us?</label>
            <input type="text" id="hear-from" name="hear-from" required />
          </div>

          <div className="form-group">
            <label htmlFor="any-other-comments">Any Other Comments?</label>
            <textarea id="any-other-comments" name="any-other-comments" rows="4"></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      <div className="locations">
        <div className="west-la">
          <h2>West LA</h2>
          <h3>Los Angeles</h3>
          <p>Near Sony Studios</p>
          <p>Tel. 310-869-1011</p>
          <p>*TOURS BY APPOINTMENT ONLY</p>
        </div>

        <div className="playa-del-rey">
          <h2>Playa Del Rey</h2>
          <h3>Los Angeles</h3>
          <p>Near The Beach</p>
          <p>Tel. 310-869-1011</p>
          <p>*TOURS BY APPOINTMENT ONLY</p>
        </div>

        <div className="redondo-beach">
          <h2>Redondo Beach</h2>
          <h3>South Bay</h3>
          <p>Near Redondo Beach & 190th Street</p>
          <p>Tel. 310-869-1011</p>
          <p>*TOURS BY APPOINTMENT ONLY</p>
        </div>

        <div className="marina-del-rey">
          <h2>Marina Del Rey</h2>
          <h3>Los Angeles</h3>
          <p>Near The 90 FWY & Culver Blvd</p>
          <p>Tel. 310-869-1011</p>
          <p>*TOURS BY APPOINTMENT ONLY</p>
        </div>

        <div className="san-francisco">
          <h2>South Beach Rincon Hill</h2>
          <h3>San Francisco</h3>
          <p>Near Brannan & 2nd</p>
          <p>Tel. 310-869-1011</p>
          <p>*TOURS BY APPOINTMENT ONLY</p>
        </div>
      </div>

      <div className="resources">
        <div className="resources-inner">
          <div className="resources-left">
            <h3 className="in-touch">Get In Touch With Us</h3>
            <p className="visit-info">
              Visit our contact page to schedule your private tour now and see what WSM can do for you and your wine collection.
            </p>
            <div className="socials">
              <a href="https://www.winestoragemanagement.com/">
                <img src="wsmlogo.jpg" alt="WSM Logo" />
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
      </div>

      <div className="footer">
        <p>Copyright © 2026 Wine Storage Management - All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
