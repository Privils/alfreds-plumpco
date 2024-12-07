import React, { useState } from 'react';
import { FaInstagram, FaWhatsapp, FaPhone, FaBars } from 'react-icons/fa';
import { Link } from 'react-router';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>   

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

      <header>
        <div className="icons-header">
          <h1 className="head">Alfred Plumbing Maintenance And Renovations</h1>
          <div>
            <FaInstagram className="icon"/>
            <FaWhatsapp className="icon whats-app" />
          </div>
        </div>



        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <div id="phone-container">
            <FaPhone className="FaPhone" />
            <p className="call-us">
              Got a Plumbing Emergency? Call us 24/7: <br />
              <span className="phone">+27 84 051 5349</span>
            </p>
          </div>
        </div>
      </div>
    </nav>
       
      </header>
    </>
  );
};

export default Header;






