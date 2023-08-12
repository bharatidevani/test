import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export const Menu = () => {
  return (
    <>
      <ul className="menubar">
        <li>
          <NavLink exact activeClassName="active" to="/">
            About us
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/service">
            Service
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/search">
            Search Image
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/user/shree/ss ">
            User
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact us
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default Menu;
