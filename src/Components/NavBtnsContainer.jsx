import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";

function NavBtnsContainer({ additionalClass }) {
  const { isLoading, user } = useSelector((state) => {
    return state.userState;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // go to "/" when there is no user present
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  // handleLogout
  function handleLogout() {
    dispatch(logoutUser());
    navigate("/");
  }

  return (
    <div className={`nav-btns-cont`}>
      {/* LOGIN AND SIGNUP BTNS */}
      {!user && (
        <div className={`${additionalClass}`}>
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
      )}

      {/* LOGOUT BTN */}
      {user && (
        <div className={`${additionalClass}`}>
          <NavLink to={"/"}>
            <button className="btn" type="button" onClick={handleLogout}>
              logout
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default NavBtnsContainer;
