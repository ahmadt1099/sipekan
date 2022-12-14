import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg d-flex align-content-center justify-content-center navbar-dark bg-primary">
        <div className="container my-1">
          <Link className="text-decoration-none text-white fs-2 fw-bold" to="/">
            SIPEKAN
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-2">
              <li className="nav-item">
                <Link to="/about" className="btn py-2 px-4 btn-light">
                  <strong>About Us</strong>{' '}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="btn py-2 px-4 btn-info">
                  <strong>Sign up</strong>{' '}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="btn py-2 px-4 btn-success">
                  <strong>Log in</strong>{' '}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Head;
