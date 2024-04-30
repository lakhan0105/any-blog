import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";

function NavBtnsContainer() {
  const { isLoading, user } = useSelector((state) => {
    return state.userState;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // go to "/" when there is no user present
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  // handleLogout
  function handleLogout() {
    dispatch(logoutUser());
    navigate("/");
  }

  return (
    <div className="nav-btns-cont">
      {/* LOGIN AND SIGNUP BTNS */}
      {!user && (
        <>
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
        </>
      )}

      {/* LOGOUT BTN */}
      {user && (
        <NavLink to={"/"}>
          <button className="btn" type="button" onClick={handleLogout}>
            logout
          </button>
        </NavLink>
      )}
    </div>
  );
}

export default NavBtnsContainer;
