import React from "react";
import { Logo, NavBtnsContainer, Navbar } from "./index";

function Header() {
  return (
    <header className="header center-cont">
      <Logo />
      <Navbar />
      <NavBtnsContainer />
    </header>
  );
}

export default Header;
