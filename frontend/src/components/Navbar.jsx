/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar navbar-dark sticky-top bg-info flex-md-nowrap p-0 shadow">
      <NavLink to="/dashboard" className="navbar-brand col-md-3 col-lg-2 me-0 py-2 px-3">
        <strong>SIPEKAN</strong>
      </NavLink>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="w-100"></div>
    </header>
  );
};

export default Navbar;
