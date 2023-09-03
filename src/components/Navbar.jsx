import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Determine the active link based on the current page's URL path
  const isHomeActive = window.location.pathname === '/';
  const isFeaturesActive = window.location.pathname === '/features';
  const isPricingActive = window.location.pathname === '/pricing';

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isNavOpen ? 'bg-white' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div>
            <button
              className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
              type="button"
              onClick={toggleNav}
              aria-expanded={isNavOpen ? 'true' : 'false'}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
              <ul className="navbar-nav">
                <li className={`nav-item ${isHomeActive ? 'active' : ''}`}>
                  <a className={`nav-link ${isHomeActive ? 'text-primary border border-primary rounded-pill' : ''}`} href="/">
                    <span className="fs-5">Home</span>
                  </a>
                </li>
                <li className={`nav-item ${isFeaturesActive ? 'active' : ''}`}>
                  <a className={`nav-link ${isFeaturesActive ? 'text-primary border border-primary rounded-pill' : ''}`} href="/features">
                    <span className="fs-5">Features</span>
                  </a>
                </li>
                <li className={`nav-item ${isPricingActive ? 'active' : ''}`}>
                  <a className={`nav-link ${isPricingActive ? 'text-primary border border-primary rounded-pill' : ''}`} href="/pricing">
                    <span className="fs-5">Pricing</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a className="navbar-brand" href="/">
              <img
                src='http://corefares.com/wp-content/uploads/2021/08/coreFares-logo-web-new.png'
                alt='logo'
                height="60px"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
