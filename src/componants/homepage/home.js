import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { getAuth } from "firebase/auth";

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
    });
  }
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };
  const database = () => {
    navigate("/database");
  };
  const login = () => {
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-bold" href="#">
            KRIOVA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <button
              type="button"
              className="btn btn-outline-info mx-4"
              onClick={login}
            >
              LOGIN
            </button>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={register}
            >
              REGISTER
            </button>
          </div>
        </div>
      </nav>

      <div>
        <h2>
        <div className="container ">
          <div className="containe">
            <div className="name">
              {/* <h1> */}
              <strong>Welcome : {currentUser.displayName}</strong>

              {/* </h1> */}
              {/* </h1> */}
            </div>
            <strong>Email : {currentUser.email} </strong>
            <strong>UID : {currentUser.uid} </strong>
          </div>
          <center>

        <button
          type="button"
          className="btn btn-outline-info mt-4"
          onClick={database}
        >
          Click here to see Databse Table
        </button>
        </center>

        </div>
        </h2>
      </div>
    </>
  );
};

export default Home;
