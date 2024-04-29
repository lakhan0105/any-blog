import React from "react";
import { FormInput } from "../Components";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="center-cont">
      <form className="form">
        <h2 className="form-title">Login</h2>

        <div>
          {/* email */}
          <div className="form-row">
            <FormInput name={"email"} label={"email"} type={"email"} />
          </div>

          {/* password */}
          <div className="form-row">
            <FormInput name={"password"} label={"password"} type={"password"} />
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
