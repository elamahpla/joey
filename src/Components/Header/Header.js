import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="Header">
    <NavLink className="Header-Home" to="/">Home</NavLink>
    <NavLink className="Header-About" to="/about">About</NavLink>
    <NavLink className="Header-Contact" to="/contact">Contact</NavLink>
    <NavLink className="Header-Portfolio" to="/portfolio">
      <span className="Header-Portfolio-Visible">Portfolio</span>
      <span className="Header-Portfolio-Invisible">Portfolio</span>
    </NavLink>
    {/* <NavLink to="/portfolio">Portfolio</NavLink>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">Home</NavLink> */}
  </header>
);

export default Header;