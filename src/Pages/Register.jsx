import React from "react";
import { FormInput } from "../Components";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="center-cont">
      <form className="form">
        <h2 className="form-title">Register</h2>

        <div>
          {/* name */}
          <div className="form-row">
            <FormInput name={"name"} label={"name"} type={"text"} />
          </div>

          {/* email */}
          <div className="form-row">
            <FormInput name={"email"} label={"email"} type={"email"} />
          </div>

          {/* password */}
          <div className="form-row">
            <FormInput name={"password"} label={"password"} type={"password"} />
          </div>
        </div>

        <div className="register-btn-cont">
          <button type="submit" className="btn register-btn">
            Register
          </button>
          <span className="toggle-text">
            already a member? <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </form>
    </section>
  );
}

export default Register;
