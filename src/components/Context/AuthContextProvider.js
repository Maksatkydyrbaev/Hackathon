import React, { createContext, useEffect, useState } from "react";
import fire from "../../fire";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");

  const [hasAccount, setHasAccount] = useState("");

  const handleSignUp = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPassword(err.message);
            break;
        }
      });
  };

  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const handleLogin = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/user-disabled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  let values = {
    email,
    password,
    user,

    emailError,
    passwordError,
    hasAccount,

    setPassword,
    setEmail,
    setHasAccount,

    handleLogin,
    handleLogOut,
    handleSignUp,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
