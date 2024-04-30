import React from "react";
import { NavLink } from "react-router-dom";

function NavLinksList() {
  return (
    <div className="navlink-list">
      <NavLink to={"/home"}>Home</NavLink>
    </div>
  );
}

export default NavLinksList;
