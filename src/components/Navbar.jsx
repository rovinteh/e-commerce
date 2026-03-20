import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on resize if it's open and we hit desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="favicon.jpeg" alt="Hold My Blooms Logo" className="logo-img" />
          <span className="logo-text">Hold My Blooms</span>
        </div>

        {/* Hamburger Menu Toggle */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#stories" className="nav-link" onClick={() => setIsMenuOpen(false)}>Stories</a></li>
          <li><a href="#message" className="nav-link" onClick={() => setIsMenuOpen(false)}>Letter</a></li>
          <li><a href="#memories" className="nav-link" onClick={() => setIsMenuOpen(false)}>Memories</a></li>
          <li><a href="#closing" className="nav-link" onClick={() => setIsMenuOpen(false)}>Beloved</a></li>
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
