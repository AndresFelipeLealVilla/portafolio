import React from 'react';
import MyLogo from '../img/MyLogo2.png';
import { About } from '../pages/About';

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
            About me
          </NavLink>
          <NavLink to="portafolio" activeStyle>
            Portfolio
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