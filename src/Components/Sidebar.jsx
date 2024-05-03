import React from "react";
import { Logo, NavBtnsContainer, NavLinksList } from "./index";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

function Sidebar({ handleSidebar }) {
  const { user } = useSelector((state) => state.userState);

  return (
    <aside className="sidebar center-cont">
      <header className="header">
        <Logo />
        <button className="btn" onClick={handleSidebar}>
          <IoClose />
        </button>
      </header>

      {user && (
        <NavLinksList
          additionalClass={"col-layout"}
          closeSidebar={handleSidebar}
        />
      )}

      <NavBtnsContainer additionalClass={"col-layout"} />
    </aside>
  );
}

export default Sidebar;
