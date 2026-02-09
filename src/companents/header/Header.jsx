import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/LOGO.png';
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo" onClick={toggleSidebar}>
            <img src={logo} alt="Logo" />
            <h2>BESTXTORE</h2>
          </div>

          <div className="search">
            <input type="text" placeholder="Search..." />
            <select>
              <option>All Categories</option>
            </select>
            <button>🔍</button>
          </div>
        </div>

        <nav className="nav">
          <ul>
            <li>All Categories</li>
            <li>Product</li>
            <li>Flash Sale</li>
            <li><Link to="/vloges" ></Link>Best Sellers</li>
            <li>Specials Offers</li>
            <li>Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={toggleSidebar}>✕</button>
        </div>
        <ul className="sidebar-links">
          <li>All Categories</li>
          <li>Product</li>
          <li>Flash Sale</li>
          <li>Best Sellers</li>
          <li>Specials Offers</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;