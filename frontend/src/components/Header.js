import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../styles/Header.css";
import logo from "./../assets/trijal_logo.png"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container">
     
        <div className="logo">
          <img src={logo} alt="Trijal Logo" />
        </div>

        <nav className="nav desktop-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products & Services</Link>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
          <Link to="/career" className={location.pathname === '/career' ? 'active' : ''}>Career</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>

   
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-header">
            <h3>Menu</h3>
            <button className="close-btn" onClick={toggleMenu}>×</button>
          </div>
          <nav className="mobile-nav-links">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About Us</Link>
            <Link to="/products" onClick={toggleMenu}>Products & Services</Link>
            <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
            <Link to="/career" onClick={toggleMenu}>Career</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>


        {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
      </div>
    </header>
  );
};

export default Header;