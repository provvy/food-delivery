import React, { forwardRef, useEffect, useState } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(({ value, formIsValid }, ref) => {
  const label = value === "Name" ? `Your ${value}` : value;
  const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (formIsValid === false) {
      setIsValid(
        value === "Postal Code"
          ? inputValue.trim().length === 5
          : inputValue.trim().length > 0
      );
    }
  }, [formIsValid, inputValue, value]);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
    if (value === "Postal Code") {
      setIsValid(e.target.value.trim().length === 5);
      return;
    }
    setIsValid(e.target.value.trim().length > 0);
  };

  return (
    <div
      className={
        isValid === true
          ? classes.controls
          : `${classes.controls} ${classes.error}`
      }
    >
      <label htmlFor={value.toLowerCase()}>{label}</label>
      <input
        onChange={changeHandler}
        value={inputValue}
        id={value.toLowerCase()}
        ref={ref}
        type="text"
      />
      {!isValid && (
        <p>
          Please enter a valid{" "}
          {value === "Postal Code"
            ? `${value.toLowerCase()} (5 characters)`
            : value.toLowerCase()}
        </p>
      )}
    </div>
  );
});

export default Input;
