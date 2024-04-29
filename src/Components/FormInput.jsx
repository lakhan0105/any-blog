import React from "react";

function FormInput({ label, name, type }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} />
    </>
  );
}

export default FormInput;
