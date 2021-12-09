/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import TextField from "../form/TextField";

const LoginForm = () => {
  function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;

    let yy = date.getFullYear();

    return yy + "-" + mm + "-" + dd;
  }

  const [data, setData] = useState({
    location: "Москва",
    days: "1",
    date: formatDate(new Date()),
  });

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(data);
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={"Локация"}
        name="location"
        value={data.location}
        onChange={handleChange}
        type="text"
      />
      <TextField
        label={"Дата заселения"}
        name="date"
        value={data.date}
        onChange={handleChange}
        type="date"
      />
      <TextField
        label={"Количество дней"}
        name="days"
        value={data.days}
        onChange={handleChange}
        type="text"
      />
      <button
        className="btn btn-primary w-100 mx-auto btn-search mb-3 mt-10"
        type="sumbit"
      >
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
