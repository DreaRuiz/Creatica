import React, { useState, useEffect, useContext } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, createUserWithEmailAndPassword, sendPasswordResetEmail,signOut} from "firebase/auth";


const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
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

  const value = {
    currentUser,
    auth,
    signup,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;