import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseconfig";

const Register = () => {
  const navigate = useNavigate();
  const change = () => {
    navigate("/");
  };
  const [User, SetUser] = useState({
    fristName: "",
    email: "",
    password: "",
    confpaswword: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    SetUser({
      ...User,
      [name]: value,
    });
  };
  const regster = () => {
    // console.log(User)
    const { fristName, email, password, confpaswword } = User;
    if (fristName && email && password && password === confpaswword) {
      createUserWithEmailAndPassword(auth, User.email, User.password)
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: User.fristName,
          });
          navigate("/home");
        })
        .catch((err) => {
          alert(err.message);
          console.log(err);
        });
    } else {
      alert("invalid input");
    }
  };
  return (
    <div>

    <center>
    </center>
      <div className="container register">
      <h2 className="h2">Register YourSelf</h2>
        <div className="form-floating mb-3 logfm">
          <input
            type="email"
            name="fristName"
            value={User.fristName}
            onChange={handlechange}
            className="form-control mt-3"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput"> Name</label>
        </div>
        <div className="form-floating mb-3 logfm">
          <input
            type="email"
            value={User.email}
            onChange={handlechange}
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3 logfm">
          <input
            type="password"
            value={User.password}
            onChange={handlechange}
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3 logfm">
          <input
            type="password"
            name="confpaswword"
            value={User.confpaswword}
            onChange={handlechange}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Confirm Password</label>
        </div>
        <button
          type="button"
          onClick={regster}
          className="btn btn-dark my-2 logb float-end "
        >
          REGISTER
        </button>
        <div>or</div>
        <button
          type="button"
          className="btn btn-dark my-2 logb float-end"
          onClick={change}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Register;
