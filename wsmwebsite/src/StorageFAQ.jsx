import React from 'react'
import { Link } from 'react-router-dom'
import './StorageFAQ.css'

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
                    <a href='#contact'>Contact</a>
                    <a href='member portal'>Member Portal</a>
                    <a href='#blog'>Blog</a>
                    <a href='#friends of wsm'>Friends of WSM</a>
                </div>
            </div>
            <div className="storage-header" >
                <span className="bold-word">Storage</span>
                <span className="normal-word">Solutions</span>
            </div>  

            <div className="storage-statement">
                <h3>We are owned and managed by fellow wine collectors dedicated to providing easy to access facilities that preserve and protect your fine wine.</h3>
            </div>
        </div>
    )
}

export default StorageFAQ
