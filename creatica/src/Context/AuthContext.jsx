import { createContext, useEffect, useState } from "react";

// IMPORTS DE FIREBASE
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

// CREO EL CONTEXT I EL PROVIDER

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // ESTATS
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

 
  // REGISTER
  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(auth.currentUser, {
        displayName: firstName,
      });
      const user = userCredential.user;
      sessionStorage.setItem("Auth Token", user.stsTokenManager.refreshToken);
      await setDoc(doc(db, "users", user.uid), {
        email,
        firstName,
        userTaskList: [],
        //* Aquí posar les coses que s'han de guardar a la base de dades (de cada user)
      });
      return true;
    } catch (error) {
    }
  };

  // LOGIN
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      sessionStorage.setItem("Auth Token", user.stsTokenManager.refreshToken);

      return true;
    } catch (error) {
      console.log(error.message);
    }
  };

  // RESETPASSWORD
  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // SIGNOUT
  const logOut = async () => {
    try {
      await signOut(auth);
     /*  navigate('/Welcome'); // Quan tanquis sessió ves a Welcome */
      return true;
    } catch (error) {
      return false;
    }
  };
  // COMPROVA SI L'USER ESTÀ LOGUEJAT
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
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        email,
        setEmail,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        password,
        setPassword,
        error,
        setError,
        message,
        setMessage,
        signup,
        login,
        resetPassword,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
