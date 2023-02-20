import React from 'react';
import MyLogo from '../img/MyLogo2.png';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './Elements';
import './Navbar.css';

const Navbar = () => {

  return (

    
    
    <div>
      <Nav>
        <NavLink to="/">
          <img src={MyLogo} alt='logo' className='Logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Inicio
          </NavLink>
          <NavLink to="about" activeStyle>
            Sobre Mí
          </NavLink>
          <NavLink to="portafolio" activeStyle>
            Portafolio
          </NavLink>
          <NavLink to="blog" activeStyle>
            Blog
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;