import React from "react";
import { NavLink } from "react-router-dom";

function NavLinksList({ additionalClass, closeSidebar }) {
  return (
    <div className={`navlink-list ${additionalClass}`}>
      <NavLink to={"/home"} onClick={closeSidebar}>
        Home
      </NavLink>
      <NavLink to={"/createpost"} onClick={closeSidebar}>
        write
      </NavLink>
    </div>
  );
}

export default NavLinksList;
