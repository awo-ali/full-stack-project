import React, { useState } from 'react';
import './Navbar.scss'
import logo from '../../assets/images/southampton-logo.png';
import menu from '../../assets/images/menu-image.png';
import Menu from '../../component/Menu/Menu';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuContent = () => {
    setToggleMenu(!toggleMenu);
  };
    return (
      <div className="navbar">
      <img className="navbar__logo" src={logo} alt="southampton logo" />
      <h1>Southampton-FC</h1>
      <img className='navbar__menu' onClick={toggleMenuContent} src={menu} alt="menu-icon" />
      {toggleMenu && <Menu className="navbar_toggle" toggleMenuContent={toggleMenuContent} />}  
      </div>
    );
  }
  
  export default Navbar;
  