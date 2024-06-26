import React from "react";
import { NavLinksList } from "./index";

function Navbar() {
  return (
    <nav className="navbar small-screen-hide">
      <NavLinksList />

      <div className="nav-searchbar">
        <input type="search" placeholder="search" />
      </div>
    </nav>
  );
}

export default Navbar;
