/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, reset } from '../features/authSlice.js';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate('/');
  };

  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">
          <span>MENU</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </li>
          {user && user.role === 'admin' && (
            <li>
              <NavLink to="/user" className="nav-link">
                User
              </NavLink>
            </li>
          )}
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>ADMINISTRATOR</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/tugas" className="nav-link">
              Tugas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/submit" className="nav-link">
              Submit
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reward" className="nav-link">
              Hadiah
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/redeem" className="nav-link">
              Penukaran
            </NavLink>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>SETTINGS</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <button onClick={logout} className="nav-link border-0 bg-transparent">
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
