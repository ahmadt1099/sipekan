/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Foot = () => {
  return (
    <div className="container-fluid bg-primary">
      <div className="container text-white">
        <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3">
          <p className="col-md-4 mb-0">&copy; 2022 SIPEKAN</p>

          <a href="#" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <img srcSet="/sipekan.png" style={{ fill: 'white' }} alt="logo" width={100} f />
          </a>

          <ul className="nav col-md-4 justify-content-end mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-white link-hover">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link px-2 text-white link-hover">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link px-2 text-white link-hover">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link px-2 text-white link-hover">
                Log in
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Foot;
