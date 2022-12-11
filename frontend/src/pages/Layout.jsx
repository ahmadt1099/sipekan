import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3 bg-info bg-opacity-10" style={{ minHeight: '100vh' }}>
            <main>{children}</main>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
