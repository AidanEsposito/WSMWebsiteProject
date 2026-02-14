import { Link } from 'react-router-dom'
import './FacilityFeatures.css'

function FacilityFeatures() {
  return (
    <>
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
          <a href="#member-portal">Member Portal</a>
          <a href="#blog">Blog</a>
          <a href="#friends-of-wsm">Friends of WSM</a>
        </nav>
      </header>

      <section className="facility-hero">
        <div className="video-container">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="facility-video"
          >
            <source src="WineLocker.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="video-text">
            <h1>Wine Storage Management Facility Features</h1>
          </div>
        </div>
      </section>

      <section className="promotion-text">
        <h2>
          Climate-controlled, secured, and seismic resistant. Wine Storage
          Management was custom built specifically for fine wine protection.
        </h2>
      </section>

      <section className="features-list">
        <div className="feature-card">
          <img src="facility-climate.avif" alt="Climate Controlled" />
          <h3>Climate Controlled</h3>
          <p>
            State-of-the-art refrigeration systems with built-in redundancies
            keep your wine stored at the ideal temperature. WSM continuously
            monitors all facilities for temperature changes and water intrusion.
          </p>
        </div>

        <div className="feature-card">
          <img src="facility-security.avif" alt="Secure Access" />
          <h3>24/7 Secure Access</h3>
          <p>
            Members enjoy 24/7/365 access with advanced security controls,
            monitoring, and high-security keys for lockers and walk-in rooms.
          </p>
        </div>

        <div className="feature-card">
          <img src="receiving.avif" alt="Receiving Options" />
          <h3>Receiving Options</h3>
          <p>
            For Los Angeles members, shipments can be received at one of our LA
            facilities and placed directly into your wine locker or storage room
            for an added fee.
          </p>
          <button className="feature-button">Learn More</button>
        </div>
      </section>

      <section className="resources">
        <div className="resources-inner">
          <div className="resources-left">
            <h3 className="in-touch">Get In Touch With Us</h3>
            <p className="visit-info">
              Visit our contact page to schedule your private tour and see what
              WSM can do for your wine collection.
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
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/facility-features">Facility Features</Link>
            <a href="#storage">Storage</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Wine Storage Management — All rights reserved.</p>
      </footer>
    </>
  )
}

export default FacilityFeatures
