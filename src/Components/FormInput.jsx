import React from "react";

function FormInput({
  label,
  name,
  type,
  handleChange,
  extraClass,
  placeHolder,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={`${extraClass}`}
        type={type}
        name={name}
        placeholder={placeHolder}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </>
  );
}

export default FormInput;
