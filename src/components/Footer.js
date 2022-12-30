import React from 'react';
import Logo from '../assets/logo_footer.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img src={Logo} alt="logo kasa footer" />
        <p>
          <i className="fa-regular fa-copyright"></i>
          2020 Kasa. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;