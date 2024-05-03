import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/index";
import { ProtectedRoute } from "./index";

function HomeLayout() {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
}

export default HomeLayout;
