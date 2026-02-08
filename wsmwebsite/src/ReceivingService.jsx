import { Link } from 'react-router-dom'
import './ReceivingService.css'

function ReceivingService() {
  return (
    <div className="receiving-service-page">
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

          <a href="#storage-faq">Storage + FAQ</a>
          <a href="#contact">Contact</a>
          <a href="#member-portal">Member Portal</a>
          <a href="#blog">Blog</a>
          <a href="#friends-of-wsm">Friends of WSM</a>
        </nav>
      </header>

      <section className="receiving-service-content">
        <div className="receiving-service-left-flex">
            <h2>Exclusive Receiving Service</h2>

            <p>
            Did you know that we can receive your wine shipments and place them
            directly into your locker for you?
            </p>

            <strong className="receiving-warning">
            ONLY AVAILABLE IN SOUTHERN CALIFORNIA — NOT AVAILABLE AT OUR SAN
            FRANCISCO LOCATION
            </strong>
            <img
            src="storagehope.avif"
            alt="Receiving Service Storage"
            className="receiving-service-image"
            />
        </div>

        <div className="receiving-service-right-flex">
          <h2 className="receiving-service-right-header">
            1 | How It Works
          </h2>

          <p>
            Provide our receiving address to the sender of your wine. Once your
            shipment arrives, the sealed box is inventoried and stored at a
            constant 57°.
          </p>

          <p>
            Depending on volume and season, shipments are transported via
            refrigerated truck to your WSM facility. A WSM owner personally
            verifies, stores, locks, and secures your wine.
          </p>

          <p>
            You will receive confirmation once your shipment is placed in your
            locker or room.
          </p>

          <p>
            Optional label photos can be taken upon receiving your shipment and
            sent via text (additional fee applies).
          </p>

          <strong>Where to Ship</strong>
          <address className="shipping-address">
            <p>Your Name</p>
            <p>c/o JLA WSM</p>
            <p>13152 Raymer St #B</p>
            <p>North Hollywood, CA 91605</p>
          </address>

          <h2 className="receiving-service-right-header">
            2 | Service Breakdown & Cost
          </h2>

          <ul>
            <li>$10 per box received</li>
            <li>First shipment is free</li>
            <li>No fee for new clients shipping full collections</li>
            <li>Discounted pricing for multiple boxes received same day</li>
            <li>$2 per photo for optional label images</li>
          </ul>

          <h2 className="receiving-service-right-header">
            3 | If Your Shipment Doesn’t Fit
          </h2>

          <p>
            We’ll offer an additional locker or repack your shipment into a WSM
            box for a $10 fee.
          </p>

          <p className="fine-print">
            We have repacked hundreds of boxes without incident; however, we do
            not warranty against breakage during repacking.
          </p>
        </div>
      </section>

      <img
        src="wine.avif"
        alt="Wine bottles"
        className="wine-img-middle"
      />

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
        <p>
          © 2026 Wine Storage Management — All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default ReceivingService
