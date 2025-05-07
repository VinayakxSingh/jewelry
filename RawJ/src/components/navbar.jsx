import { NavLink } from "react-router-dom";
import React from "react";
import { BsSearch, BsShopWindow, BsCart4, BsGem, BsPersonFill } from "react-icons/bs"; // Bold icons
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <NavLink to="/">
          <h3 className="navbar-logo">JEWELRY.</h3>
        </NavLink>
      </div>
      <div className="nav-icons">
        <NavLink to="/" className="nav-icon
        "><BsSearch size={28} /></NavLink>
        <NavLink to="/" className="nav-icon
        "><BsShopWindow size={28} /></NavLink>
        <NavLink to="/" className="nav-icon
        "><BsGem size={28} /></NavLink>
        <NavLink to="/" className="nav-icon
        "><BsCart4 size={28} /></NavLink>
        <NavLink to="/" className="nav-icon
        "><BsPersonFill size={28} /></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
