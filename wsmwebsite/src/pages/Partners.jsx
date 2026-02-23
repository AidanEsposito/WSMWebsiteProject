import '../design/Partners.css';
import { Link } from 'react-router-dom';

function Partners() {
  return (
    <div className="partners">
      <div className="header">
        <div className="header-left">
          <a href="http://localhost:5173/">
            <img src="wsmlogo2.avif" alt="WSM Logo" />
          </a>
        </div>

        <div className="header-right">
          <Link to="/about">About</Link>
          <Link to="/facility-features">Facility Features</Link>
          <Link to="/receiving-service">Receiving Service</Link>
          <Link to="/storage-faq">Storage + FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/payment-portal">Member Portal</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/partners">Friends of WSM</Link>
        </div>
      </div>

      <div className="partners-header">
        <div className="partners-header-overlay">
          <div className="partners-header-text">
            <h1>Wine Storage Management: Elevating the Wine Experience</h1>
            <p>
              At Wine Storage Management, we're dedicated to fostering strong
              partnerships with local businesses. By combining our
              state-of-the-art storage facilities with the expertise of these
              trusted retailers, we provide a comprehensive solution for wine
              enthusiasts, from storage and management to purchasing and
              tasting. This strategic alliance allows us to elevate the
              wine-buying experience, ensuring that our clients have access to
              the finest wines, expertly stored and conveniently accessible.
            </p>
          </div>
        </div>
      </div>

      <div className="uncorked-content">
        <div className="uncorked-left">
          <img src="uncorked1.avif" alt="Uncorked" className="uncorked-image-1" />
          <img src="uncorked2.avif" alt="Uncorked" className="uncorked-image-2" />
        </div>

        <div className="uncorked-right">
          <h2>Uncorked</h2>
          <h3>Your Ultimate Wine Destination in Hermosa & Manhattan Beach</h3>
          <p>
            Uncork your palate at Uncorked, a premier wine shop offering over 600 wines
            from around the globe. With locations in Hermosa Beach and Manhattan Beach,
            Uncorked is your go-to destination for award-winning wines, rare boutique
            selections, and a wide range of craft beers.
          </p>
          <p>
            Explore their Tasting Bar, where you can sample eight different wines and
            curate your own personalized tasting experience. From classic varietals to
            exotic finds, there's something to satisfy every taste.
          </p>
          <p>
            Beyond their extensive wine selection, Uncorked offers a range of additional
            services, including free corkage with local restaurants, unique wine
            accessories, custom gift baskets, gourmet cheese, olive oils, and
            delectable treats.
          </p>
          <a
            href="https://www.google.com/maps/place/Uncorked+The+Wine+Shop/@33.8836422,-118.414758,912m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2b3eca56dc06b:0x2225c73b8ec343de!8m2!3d33.8836378!4d-118.4098925!16s%2Fg%2F1trplgff?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="googlemapsmarker.png" alt="Google Maps Marker" className="maps-marker" />
          </a>
          <p>1000 Manhattan Avenue, Manhattan Beach, CA 90266</p>
          <a
            href="https://www.google.com/maps/place/Uncorked+The+Wine+Shop/@33.8636698,-118.4008299,912m/data=!3m3!1e3!4b1!5s0x80c2b37f30cbca91:0x3b565440b5821e53!4m6!3m5!1s0x80c2b37f36a26399:0x79147f3398729e70!8m2!3d33.8636654!4d-118.3982496!16s%2Fg%2F1hc97xsr0?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="googlemapsmarker.png" alt="Google Maps Marker" className="maps-marker" />
          </a>
          <p>302 Pier Avenue, Hermosa Beach, CA 90254</p>
        </div>
      </div>

      <div className="barsha-content">
        <div className="barsha-left">
          <img src="barsha1.avif" alt="Barsha" className="barsha-image-1" />
          <img src="barsha2.avif" alt="Barsha" className="barsha-image-2" />
          <img src="barsha3.avif" alt="Barsha" className="barsha-image-3" />
        </div>

        <div className="barsha-right">
          <h2>Barsha-</h2>
          <h3>Your Local Wine Experts in Hermosa & Manhattan Beach</h3>
          <p>
            We're thrilled to introduce you to Barsha, your neighborhood wine experts
            in Manhattan Beach and Hermosa Beach. With a focus on providing
            high-quality wines and personalized service, Barsha has become a
            beloved destination for wine enthusiasts. Whether you're looking for a
            special bottle to celebrate a milestone or simply enjoying a glass of
            wine with friends, Barsha has everything you need.
          </p>
          <a
            href="https://www.google.com/maps/place/Barsha+Wines+%26+Spirits/@33.8852493,-118.3963317,15z/data=!4m2!3m1!1s0x0:0x68ab8a53cf5537cf?sa=X&ved=1t:2428&ictx=1111&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="googlemapsmarker.png" alt="Google Maps Marker" className="maps-marker" />
          </a>
          <p>917 N Sepulveda Blvd, Manhattan Beach, CA 90266</p>
          <a
            href="https://www.google.com/maps/place/Barsha/@33.8659055,-118.3899123,912m/data=!3m3!1e3!4b1!5s0x80c2b480d39db951:0xf110aaf11e319838!4m6!3m5!1s0x80c2b5df7dbc4ded:0x6daad9f68526ee60!8m2!3d33.8659011!4d-118.387332!16s%2Fg%2F11h5pky69x?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="googlemapsmarker.png" alt="Google Maps Marker" className="maps-marker" />
          </a>
          <p>1141 Aviation Blvd Hermosa Beach, CA 90254</p>
        </div>
      </div>

      <div className="mbw-content">
        <div className="mbw-left">
          <img src="mbwine.avif" alt="MBW" className="mbw-image-1" />
        </div>

        <div className="mbw-right">
          <h2>mb WINE co.- </h2>
          <h3>Your Neighborhood Wine Haven in Manhattan Beach</h3>
          <p>
            We're excited to introduce you to mbWine, a charming wine shop nestled
            in the heart of Manhattan Village, California. With a passion for fine
            wines and a dedication to exceptional customer service, mbWine offers
            a curated selection of wines from around the world. Whether you're a
            seasoned wine connoisseur or just starting your wine journey, their
            knowledgeable staff is always on hand to provide expert recommendations
            and personalized advice.
          </p>
          <a
            href="https://www.google.com/maps/place/mbWINEco/@33.900085,-118.3954819,3648m/data=!3m1!1e3!4m6!3m5!1s0x80c2b3f8e3255be9:0x61dc1ab14190496f!8m2!3d33.900085!4d-118.3954819!16s%2Fg%2F11dxhdpb65?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="googlemapsmarker.png" alt="Google Maps Marker" className="maps-marker" />
          </a>
          <p>3500 N Sepulveda Blvd Manhattan Beach, CA 90266</p>
        </div>
      </div>

      <div className="resources">
        <div className="resources-inner">
          <div className="resources-left">
            <h3 className="in-touch">Get In Touch With Us</h3>
            <p className="visit-info">
              Visit our contact page to schedule your private tour now and see
              what WSM can do for you and your wine collection.
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
        <p>Copyright © 2026 Wine Storage Management- All rights reserved.</p>
      </div>
    </div>
  );
}

export default Partners;
