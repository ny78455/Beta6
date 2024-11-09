import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <input type="text" placeholder="Type here..." className="search-bar" />
      <div className="navbar-icons">
        <span className="icon">🔔</span>
        <span className="icon">⚙️</span>
        <span className="icon">👤</span>
      </div>
    </div>
  );
}

export default Navbar;
