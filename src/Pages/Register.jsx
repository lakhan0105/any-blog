import React, { useState } from "react";
import { nanoid } from "nanoid";
import { FormInput } from "../Components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Client, Account, ID } from "appwrite";
import { createUser } from "../features/user/userSlice";

const initialState = {
  userId: ID.unique(),
  name: "",
  email: "",
  password: "",
};

function Register() {
  const { isLoading, user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);

  // handleRegister
  function handleRegister(e) {
    e.preventDefault();
    dispatch(createUser(values));
  }

  // handleChange
  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setValues((prev) => {
      return { ...prev, [key]: value };
    });
  }

  return (
    <section className="center-cont">
      <form className="form" onSubmit={handleRegister}>
        <h2 className="form-title">Register</h2>

        <div>
          {/* name */}
          <div className="form-row">
            <FormInput
              name={"name"}
              label={"name"}
              type={"text"}
              handleChange={handleChange}
            />
          </div>

          {/* email */}
          <div className="form-row">
            <FormInput
              name={"email"}
              label={"email"}
              type={"email"}
              handleChange={handleChange}
            />
          </div>

          {/* password */}
          <div className="form-row">
            <FormInput
              name={"password"}
              label={"password"}
              type={"password"}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className="register-btn-cont">
          <button type="submit" className="btn register-btn">
            {isLoading ? "Loading..." : "Register"}
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
