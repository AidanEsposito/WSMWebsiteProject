import './Home.css'
import App from './App.jsx'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About.jsx';
import FacilityFeatures from './FacilityFeatures.jsx';



// Add react-router-dom components to go to other pages


{/* Maybe make a header component to reuse on other pages? */}

function Home() { 
  const [count, setCount] = useState(0)
  return (
    <>
      
    <div className="header">
      <div className="header-left">
        {/* <h1>Wine Storage Management</h1> */}
        <a href="http://localhost:5173/"><img src="WSM.jpeg" alt="WSM Logo"></img></a>
      </div>

      <div className="header-right">
        {/* Follow Pattern for other pages */}
        <Link to="/about">About</Link> 

        <Link to="/facility-features">Facility Features</Link> 
        <a href='#receiving services'>Receiving Service</a>
        <a href='storage + faq'>Storage + FAQ</a>
        <a href='#contact'>Contact</a>
        <a href='member portal'>Member Portal</a>
        <a href='#blog'>Blog</a>
        <a href='#friends of wsm'>Friends of WSM</a>
      </div>
    </div>

    <div className="center">
      <div className="center-text">
        <h2>
          PRESERVE & PROTECT <br />
          YOUR WINE <br />
          <strong className="bold">WITH 24/7 ACCESS</strong>
        </h2>
      </div>
      <div className="center-video">
        <video controls autoPlay muted loop>
          <source src="WineStorageVideo.mp4" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    <div className="wsm-info">
      <h3 className="Tab">Premium Wine Storage</h3>
      <p className="paragraph1">Storage Management (WSM) provides state-of-the-art wine storage in Los Angeles and San Francisco, with secure and accessible wine lockers and walk-in wine rooms. The facilities maintain a consistent 55° and allow you to have access to your wine locker or walk-in room all day, every day including holidays.</p>
      <ul className="list1">
        <li>24/ 7/ 365 Access </li>
        <li>Easy to use lockers and wine rooms</li>
        <li>Cellars maintained at an optimal 55° and 70% humidity</li>
        <li>Exclusive concierge services and recommendations</li>
      </ul>
    </div>
    <button className="wsm-button">BECOME A MEMBER</button>

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
          <p>Near The 90 FWY  & Culver Blvd</p>
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

    </>
  )
}

export default Home
