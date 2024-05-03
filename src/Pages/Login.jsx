import React, { useState } from "react";
import { FormInput } from "../Components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const initialState = { email: "", password: "" };

function Login() {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  // handleChange
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setValues((prev) => {
      return { ...prev, [key]: value };
    });
  }

  // handleLogin
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(values));
    navigate("/home");
  };

  return (
    <section className="center-cont">
      <form className="form" onSubmit={handleLogin}>
        <h2 className="form-title">Login</h2>

        <div>
          {/* email */}
          <div className="form-row">
            <FormInput
              extraClass={"form-input"}
              name={"email"}
              label={"email"}
              type={"email"}
              handleChange={handleChange}
            />
          </div>

          {/* password */}
          <div className="form-row">
            <FormInput
              extraClass={"form-input"}
              name={"password"}
              label={"password"}
              type={"password"}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className="login-btn-cont">
          <button type="submit" className="btn login-btn">
            Login
          </button>
          <span className="toggle-text">
            not a member? <Link to={"/register"}>register</Link>
          </span>
        </div>
      </form>
    </section>
  );
}

export default Login;
