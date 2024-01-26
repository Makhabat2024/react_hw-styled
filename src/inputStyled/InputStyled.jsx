import React from "react";
import scss from "./inputStyle.module.scss";

const InputStyled = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      className={scss.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputStyled;
