import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
      if (localStorage.getItem('user-info')) {
          history.push("./add");
      }
  })


  async function singUP() {
    let item = { name, email, password };
    console.warn(item);

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    result = await result.json();
    console.warn("Result ", result);

    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");
  }

  return (
    <>
      <Header />
      <div className="col-md-6 offset-md-3">
        <h1>Register Page</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="form-control"
        />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="form-control"
        />
        <br />
        <button onClick={singUP} className="btn btn-primary">
          Sing Up
        </button>
      </div>
    </>
  );
}

export default Register;
