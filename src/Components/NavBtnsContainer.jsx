import React from "react";
import { NavLink } from "react-router-dom";

function NavBtnsContainer() {
  return (
    <div className="nav-btns-cont">
      <NavLink to={"/login"}>
        <button className="btn" type="button">
          login
        </button>
      </NavLink>

      <NavLink to={"/register"}>
        <button className="btn signup-btn" type="button">
          signup
        </button>
      </NavLink>
    </div>
  );
}

export default NavBtnsContainer;
