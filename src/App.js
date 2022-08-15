import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

import Home from "./componants/homepage/home";
import Login from "./componants/loginpage/login";
import Register from "./componants/register/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forgot from "./componants/forgotpassword/Forgot";
import { auth } from "./firebaseconfig";
import AuthProvider from "./context/authcontext";
import Database from "./componants/DatabaseTable/Database";

function App() {
  const [username, setusername] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setusername(user.displayName);
      } else {
        setusername("");
      }
    });
  }, []);
  return (
    <AuthProvider>
      <div className="App">
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/forget" element={<Forgot />}></Route>
              <Route path="/database" element={<Database />}></Route>
            </Routes>
          </BrowserRouter>

          {/* <Home/> */}
          {/* <Login/> */}
          {/* <Register/> */}
        </>
      </div>
    </AuthProvider>
  );
}

export default App;
