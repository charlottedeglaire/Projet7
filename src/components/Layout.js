import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './Navbar';

const Layout = () => {
  return (
    <div className='body'>
      <div className="Layout">
        <NavBar />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;