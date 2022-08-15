import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseconfig";

const Forgot = () => {
  const navigate = useNavigate();
  const [User, SetUser] = useState({
    email: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    SetUser({
      ...User,
      [name]: value,
    });
  };
  const forgotpassword =async () => {
   await sendPasswordResetEmail(auth, User.email)
      .then(async (res) => {
        alert("link send successful ");
        navigate("/home");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="form-floating c login">
          <h2 className="h2">Enter your email for password reset</h2>

      <form action="">
        <input
          type="email"
          value={User.email}
          onChange={handlechange}
          name="email"
          className="form-control form-floating mb-3 logfm mt-4"
          id="floatingPassword"
          placeholder=" email"
        />
      </form>
      <button
        type="submit"
        className="btn btn-dark my-2 logb float-end"
        onClick={forgotpassword}
      >
        RESET
      </button>
    </div>
  );
};

export default Forgot;
