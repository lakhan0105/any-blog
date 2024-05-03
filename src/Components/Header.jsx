import React, { useState } from "react";
import { Logo, NavBtnsContainer, Navbar, Sidebar } from "./index";
import { useSelector } from "react-redux";
import { FaBars } from "react-icons/fa6";

function Header() {
  const { user } = useSelector((state) => state.userState);
  const [showSidebar, setShowSidebar] = useState(false);

  // handleSidebar
  function handleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  return (
    <header className="header center-cont">
      <button className="hamburger big-screen-hide" onClick={handleSidebar}>
        <FaBars />
      </button>

      <Logo />
      {user && <Navbar />}

      {showSidebar && <Sidebar handleSidebar={handleSidebar} />}
      <NavBtnsContainer />
    </header>
  );
}

export default Header;
