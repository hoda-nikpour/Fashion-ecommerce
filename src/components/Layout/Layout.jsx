
import React from 'react';

import Info from '../common/Info';
import Footer from '../common/footer';
import Navbar from '../common/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <div className=" md:mx-auto md:p-4 p-2 mt-16">
        {children}      
      </div>
      <Info/>
      <Footer/>
    </div>
  );
};

export default Layout;
