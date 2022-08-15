import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../../firebaseconfig";
import {useAuth} from "../../context/authcontext";
 


const Login = () => {


  const navigate = useNavigate();
  const change = () => {
    navigate("/register");
  };
  const forget = () => {
    navigate("/forgot");
  };
  const [User, SetUser] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    SetUser({
      ...User,
      [name]: value,
    });
  };
  const login = (e) => {
    signInWithEmailAndPassword(auth, User.email, User.password)
      .then(async (res) => {
        alert("login sucessfull")
        navigate("/home");
      })
      .catch((err) => {
        // setSubmitButtonDisabled(false);
        alert(err.message);
      });
  };
  return (
    <div className="card">
      {/* {console.log(User)} */}
      <div className="container login ">
      <h2 className="h2">Login YourSelf</h2>

        <div className="form-floating mb-3 logfm">
          <input
            type="email"
            name="email"
            value={User.email}
            onChange={handlechange}
            className="form-control mt-3"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating logfm">
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
        <div className="forgeet">
          {/* <button onClick={forget}> */}
            <a href="/forget" onClick={forget}>
            Forget Password
            </a>
          {/* </button> */}
        </div>
        <div>
          <button
            type="button"
            onClick={login}
            className="btn btn-dark logb my-2 float-start"
          >
            LOGIN
          </button>
          <div>or</div>
          <button
            type="button"
            className="btn btn-dark my-2 logb float-end"
            onClick={change}
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
