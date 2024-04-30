import React from "react";

function FormInput({ label, name, type, handleChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
}

export default FormInput;
