import React from "react";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.userState);

  if (user) {
    return <>{children}</>;
  }
}

export default ProtectedRoute;
