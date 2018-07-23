import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="Header">
    <NavLink className="Header-Home" to="/">
      <span className="Header-Home-Visible">Home</span>
      <span className="Header-Home-Invisible">Phone</span>
    </NavLink>
    <NavLink className="Header-About" to="/about">
      <span className="Header-About-Visible">About</span>
      <span className="Header-About-Invisible">About</span>
    </NavLink>
    <NavLink className="Header-Contact" to="/contact">
      <span className="Header-Contact-Visible">Contact</span>
      <span className="Header-Contact-Invisible">Contact</span>
    </NavLink>
    <NavLink className="Header-Portfolio" to="/portfolio">
      <span className="Header-Portfolio-Visible">Portfolio</span>
      <span className="Header-Portfolio-Invisible">Portfolio</span>
    </NavLink>
    <NavLink className="Header-Skills" to="/skills">
      <span className="Header-Skills-Visible">Skills</span>
      <span className="Header-Skills-Invisible">Skills</span>
    </NavLink>
    <div className="Header-Line">
      &nbsp;
    </div>
    {/* <NavLink to="/portfolio">Portfolio</NavLink>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">Home</NavLink> */}
  </header>
);

export default Header;