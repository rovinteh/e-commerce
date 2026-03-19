import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="favicon.jpeg" alt="Hold My Blooms Logo" className="logo-img" />
          <span className="logo-text">Hold My Blooms</span>
        </div>
        <ul className="nav-links">
          <li><a href="#stories" className="nav-link">Stories</a></li>
          <li><a href="#message" className="nav-link">Letter</a></li>
          <li><a href="#memories" className="nav-link">Memories</a></li>
          <li><a href="#closing" className="nav-link">Beloved</a></li>
        </ul>
        <div className="nav-actions">
          <button className="btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
