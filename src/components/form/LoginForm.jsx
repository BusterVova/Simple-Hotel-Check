/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import TextField from "./TextField";
import * as yup from "yup";
const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  const validateScheme = yup.object().shape({
    password: yup
      .string()
      .required("Password is required")
      .matches(/(?=.*[A-Z])/, "Capital letter is required")
      .matches(/(?=.*[0-9])/, "Digit is required")
      .matches(/(?=.{8,})/, "At least 8 digits are required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Email is incorrect"),
  });

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    validateScheme
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }));
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="login-header">Simple Hotel Check</h4>
      <TextField
        label={"Email"}
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label={"Password"}
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button
        className="btn btn-primary w-100 mx-auto btn-login"
        type="sumbit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
