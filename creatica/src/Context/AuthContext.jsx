import React, { useState, useEffect, useContext } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";


export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <AuthContext.Provider value={{    
      currentUser,
      auth,
      signup,
      resetPassword,}}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;