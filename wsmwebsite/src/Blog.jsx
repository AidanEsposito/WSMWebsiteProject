import React from 'react';
import { Link } from 'react-router-dom'
import './Blog.css';



function Blog() {
    return (
        <div className="blog">
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
                    <a href='#friends of wsm'>Friends of WSM</a>
                </div>
            </div>
            <div className="blog-header">
                <h2>All Posts</h2>
                <h2>Wine Storage Management</h2>
                <h2>Friends of Wine Storage Management</h2>
                <h2>Wine Events that WSM Loves</h2>
                <select id="More" name="More">
                    <option value="More">More</option> {/* Fix Later */}
                    <option value="Wine Storage Facts">Wine Storage Facts</option>
                    <option value="From The Cellar">From The Cellar</option>
                </select>
                <img src="magnifyingglass.png" alt="Search" className="search-icon"/>  
            </div>
        </div>
    );
}

{/* Make decision if blog will be page with blog posts or pre-made blog posts that are just for show.  */}

export default Blog;