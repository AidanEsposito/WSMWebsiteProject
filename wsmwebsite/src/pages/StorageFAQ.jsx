import React from 'react'
import { Link } from 'react-router-dom'
import '../design/StorageFAQ.css'

function StorageFAQ() {
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
                    <Link to="/blog">Blog</Link>
                    <Link to="/partners">Friends of WSM</Link>
                </div>
            </div>
            <div className="storage-header" >
                <span className="bold-word">Storage</span>
                <span className="normal-word">Solutions</span>
            </div>  

            <div className="storage-statement">
                <h3>We are owned and managed by fellow wine collectors dedicated to providing easy to access facilities that preserve and protect your fine wine.</h3>
            </div>

            <div className="wine-lockers-section">
                <div className="wine-lockers">
                    <div className="locker-image">
                        <img src="lockerimage.avif" alt="Wine Locker"></img>
                    </div>
                    <div className="locker-info">
                        <div className="locker-info-header">
                            <span className="bold-word">Wine</span>
                            <span className="normal-word">Lockers</span>
                        </div>
                        <p>Our custom wine storage lockers are designed with collectors in mind and specifically engineered to be wide, so the maximum number of cases are immediately accessible. Both secure and accessible, you can look forward to the following features:</p>
                        <ul>
                            <li>A door that opens 180 degrees to allow optimal accessibility for loading and unloading. </li>
                            <li>Lockers have oversized doors for immediate access to your cases.</li>
                            <li>Locker floors have no ledges, edges, or lips to reach over or around. Boxes slide straight in and straight out with ease.</li>
                            <li>Most lockers include a high-security key that is specific to your locker.</li>
                        </ul>
                        <span className="bold-word">Our facilities offer various locker sizes and heights.</span>
                        <ul>
                            <li>Our standard lockers are designed to hold 12 cases or 144 bottles. They also hold 16 cases of ageable beer. (Yes, we offer beer storage!) </li>
                            <li>Other available locker sizes include 18, 24, 30, 36, 42, 48, 60, and 84 cases depending on the facility. </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="storage-room-section">
                <div className="storage-rooms">
                    <div className="storage-room-info">
                        <div className="storage-room-info-header">
                            <span className="bold-word">Storage</span>
                            <span className="normal-word">Rooms</span>
                        </div>
                        <p>Our walk-in rooms accommodate collections of 80 to 1,000+ cases. We can provide commercial-grade steel shelving or bottle racking. Most rooms also accommodate our rolling platform to allow for easy access to higher shelving.</p>
                    </div>
                    <div className="storage-room-image">
                        <img src="storageroomimage.avif" alt="Storage Room"></img>
                    </div>
                </div>
            </div>

            <div className="locker-racking-section">
                <div className="locker-racking">
                    <div className="locker-racking-image">
                        <img src="lockerrackingimage.avif" alt="Locker Racking"></img>
                    </div>
                    <div className="locker-racking-info">
                        <div className="locker-racking-info-header">
                            <span className="bold-word">Locker</span>
                            <span className="normal-word">Racking</span>
                        </div>
                        <p>While our lockers are designed for winery-style box storage, you may also place your own racking inside your locker or purchase from us a double deep racking system.</p>
                    </div>
                </div>
            </div>

            <div className="FAQ-section">
                <div className="FAQ-header">
                    <span className="bold-word">FAQs</span>
                </div>
                <div className="FAQ-content">
                    <span className="bold-word">How Do I Rent A Wine Locker Or Take a Tour?</span>
                    <p>Contact us by text, email, or phone. We offer prearranged, by appointment tours weekdays, evenings, and weekends. While on a by appointment tour, we can sign you up on the spot for your wine locker or room with your valid state or federal issued photo ID and a credit card. We can email a lease Docusign packet to you before, during, or after you tour appointment.</p>
                    <span className="bold-word">How Do I Pay For My Wine Locker?</span>
                    <p>We prefer a bank ACH transfer and also accept Visa, MasterCard, American Express, and Discover Card for your monthly payment.</p>
                    <span className="bold-word">Are There Any Fees Other Than The Rent For My Wine Locker?</span>
                    <p>We require an initial deposit to begin using our wine storage facility. This initial deposit is fully credited toward your rent, as well as a one-time $50 refundable deposit for your high-security locker keys.</p>
                    <span className="bold-word">Can Wine Storage Management Move My Wine Collection For Me?</span>
                    <p>Yes, we can move your collection to our wine storage facilities. Contact us for more details. Pricing is custom depending on distance, number of cases, ease of removing wine from it's current location, and other factors.</p>
                    <span className="bold-word">Can You Inventory And Value My Wine?</span>
                    <p>Yes, we can provide one time or ongoing inventory services as well as valuation. Contact us for more details.</p>
                    <span className="bold-word">Can I Ship Wine To My Locker?</span>
                    <p>Yes, you can have your wine shipments directed to our wine storage facilities. To do this, we use a specific address. Contact Us for the address and pricing.</p>
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
}

export default StorageFAQ
