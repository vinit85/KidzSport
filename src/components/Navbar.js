import React, { useState, useEffect } from 'react';

import logokidz from "../assets/images/logokidz.png";
import pluspersonImg from "../assets/images/plus-person.png";
import arrowcontact from "../assets/images/arrowcontact.png";
import registertag from "../assets/images/registertag.png";
import { Link } from "react-router-dom";
import myNewLogo from "../assets/images/new-logo.png";


function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('token');
    const usersId = localStorage.getItem('userId'); 

    setIsLoggedIn(!!token); // Set true if token exists
    if (token) {
      // Assuming the token contains user information like ID, 
      // you can either decode it or get the user ID from wherever it's stored.
      // For example, if you store the user ID in localStorage after login:
      const userId = localStorage.getItem('userId'); 
      setUserId(userId);
    }
    // Add the scroll event listener for navbar shadow effect
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 10) {
        navbar.classList.add("navbar-shadow");
      } else {
        navbar.classList.remove("navbar-shadow");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-xl navbar-light bg-light" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            {/* <img src={logokidz} className="Kidzsport World" alt="Kidzsport" /> */}
            <img src={myNewLogo} className="Kidzsport World" alt="My New Logo" />

          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto">
    <li className="nav-item">
      <a className="nav-link fw-bold" href="/">
        Home
      </a>
    </li>
    <li className="nav-item">
      <Link to="/Aboutus" className="nav-link fw-bold">
        About Us
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/events" className="nav-link fw-bold">
        Events
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/Sports-coaching" className="nav-link fw-bold">
        Sports Coaching
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/blogs" className="nav-link fw-bold">
        Blogs
      </Link>
    </li>

    {/* New Dropdown List Item */}
    <li className="nav-item dropdown fw-bold">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        More
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <Link className="dropdown-item" to="/Live-streaming">
            Live Streaming
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/My-Rupee-Coin">
          My Rupee Coin
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/Sportsstore">
          Sports Store
          </Link>
        </li>
      </ul>
    </li>
  </ul>

  <div className="mobile-register">
    <div>
      {isLoggedIn ? (
        <Link to={`/Myaccount/${userId}`}>
          <div className="register-tag">
            {/* Optionally add an icon/image */}
          </div>
          <img src={pluspersonImg} alt="Plus person" className="plus-person" />
        </Link>
      ) : (
        <Link to="/login">
          <div className="register-tag">
            {/* Optionally add an icon/image */}
          </div>
          <img src={pluspersonImg} alt="Plus person" className="plus-person" />
        </Link>
      )}
    </div>

    <Link to="/Contactus">
      <div className="contact-bg-rol">
        <div className="d-inline-flex align-items-center contact-us-btn">
          <div><p>Contact Us</p></div>
          <div><img src={arrowcontact} className="contact-uss" alt="contact-us" /></div>
        </div>
      </div>
    </Link>
  </div>
</div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
