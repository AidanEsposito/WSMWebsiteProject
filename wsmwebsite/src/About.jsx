import './About.css'
import React from 'react';
import { Link } from 'react-router-dom';



const About = () => {
  return (
    <div>
      <div className="header">
        <div className="header-left">
          {/* <h1>Wine Storage Management</h1> */}
          <a href="http://localhost:5173/"><img src="wsmlogo2.avif" alt="WSM Logo"></img></a>
        </div>
      
        <div className="header-right">
          {/* Follow Pattern for other pages */}
          <Link to="/about">About</Link> 
          <Link to="/facility-features">Facility Features</Link> 
          <Link to="/receiving-service">Receiving Service</Link>
          <Link to="/storage-faq">Storage + FAQ</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/payment-portal">Member Portal</Link>
          <a href='#blog'>Blog</a>
          <a href='#friends of wsm'>Friends of WSM</a>
        </div>
      </div>

      <div className ="about-header">
        <h2>About WSM</h2>
      </div>

      <div className="about-content">
        <div className="about-content-header">
          <h3>Our History</h3>
        </div>
        <div className="about-content-paragraph">
          <img src="aboutimage1.avif" alt="About1" className="About-image-1"/>
          <p>Wine Storage Management (WSM) plays a crucial role in preserving the quality and enhancing the maturation of wine, making them indispensable for collectors, investors, and enthusiasts alike. The importance of WSM lies in their ability to provide optimal conditions for wine storage. These conditions are essential for maintaining the wine's integrity, preventing spoilage, and ensuring that its flavors and aromas develop complexity over time. Furthermore, WSM facilities offer security and professional management, safeguarding valuable collections and providing peace of mind. Whether for personal enjoyment or as an investment, the proper storage of wine is critical in realizing its full potential, making WSM’s facilities a necessary investment for anyone serious about their wine.</p>
          <p>George Fansmith, the Managing Director of WSM, understands the value of fine wine collections and is a fellow connoisseur who has been in the wine storage industry for over 20 years (and counting). George has built, opened, and managed 9 facilities. George combines his love and knowledge of wine with his excellent client management skills to offer WSM members state-of-the-art services. His expertise is unmatched and one of the reasons why WSM remains a leading brand in innovative wine storage.</p>
          <p>The WSM brand began with Teresa and Brian Carlson - who share a love (and deep knowledge) of fine wine. They have been visiting vineyards and collecting wine for as far back as they have known one another. As their passion for fine wine grew, so did their wine collection. In-home wine fridges or even wine rooms can only accommodate so much. So, it was through this need for a dependable off-site wine storage facility and their decades long friendship with George Fansmith that WSM was born.</p>
          <p>With 5 facilities located in West Los Angeles, Playa Del Rey, Redondo Beach, Marina del Rey and San Francisco, WSM has been providing secure and accessible accommodation for your fine wine collections since 2000. Setting us apart from other wine storage locations; our members have 24/7/365 access to their lockers because when you need a bottle, you may need it now! Your wine can rest easily (and safely) with our state-of-the-art security system. Each facility maintains consistent and optimal temperature and humidity with our pro-grade refrigeration system which is monitored 24 hours a day. Our team members are available to meet you at the facility to add that personal touch…</p>
          <img src="aboutimage2.avif" alt="About2" className="About-image-2"/>
          <p>Our promise to you: with primary goals of both preservation and security, we treat each member’s collection as we do our own..</p>
        </div>
        <div className="about-closing">
          <h4>The Wine Storage Management Team</h4>
        </div>
        <button className="about-button">Contact Us</button>
      </div>

      <div className="features">
        <div className="access-24/7">
          <h3>&#128274;</h3>
          <h3>24/7 Secure Access</h3>
          <p>Obtain your wine...any time! As a member, your access card provides you with 24/7/365 access.</p>
        </div>

        <div className="wine-passion">
          {/* Icon can go here */}
          <h3>Wine Is Our Passion</h3>
          <p>We care about your wine as much as you do.</p>
        </div>

        <div className="receiving-services">
          {/* Icon can go here */}
          <h3>Receiving Services</h3>
          <p>Shipments can be sent to our wine storage facilities</p>
        </div>

        <div className="climate-control">
          {/* Icon can go here */}
          <h3>Climate Controlled</h3>
          <p>Temperature and humidity controlled with built-in redundancies. </p>
        </div>
      </div>

      <div className="resources">
        <div className="resources-inner">
          <div className="resources-left">
            <h3 className="in-touch">Get In Touch With Us</h3>
            <p className="visit-info">Visit our contact page to schedule your private tour now and see what WSM can do for you and your wine collection.</p>
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
  )
};

export default About;