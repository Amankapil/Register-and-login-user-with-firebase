import React, { useContext, useEffect, useState } from "react";
import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebaseconfig";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState();

  // function logout(email, password) {
  //   return createUserWithEmailAndPassword(email, password);
  // }

  useEffect(() => {
    const usbscribe=  auth.onAuthStateChanged((User) => {
      setcurrentUser(User);
    });
    return usbscribe;
  }, []);
  const value = {
    currentUser
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
