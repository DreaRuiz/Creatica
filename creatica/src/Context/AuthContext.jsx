import React, { useState, useEffect, useContext } from "react";
import { auth } from "../config/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

// TODO: Fer que es mantingui logejat l'user
export const AuthContext = React.createContext();
// CONTEXT PER LA GESTIÓ D'USERS
export function useAuth() {
  return useContext(AuthContext);
}
// REGISTRE I RESETPASS
const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        auth,
        signup,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
