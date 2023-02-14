# RUTES

//Rutes
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import PublicRoute from "./PrivateRoutes/"; */
import PrivateRoute from "./PrivateRoutes/";

// Context
import AuthProvider from "../Context/AuthContext";

// Rutes públiques
import Welcome from "../pages/publicPages/Welcome";
import Login from "../pages/publicPages/Login";
import ErrorPage from "../pages/publicPages/ErrorPage";
import Register from "../pages/publicPages/Register";
import Description from "../pages/publicPages/Description";
import About from "../pages/publicPages/About";

// Rutes privades
import UserMenu from "../pages/privatePages/UserMenu";
import ToDoList from "../pages/privatePages/ToDoList";
import Calendar from "../pages/privatePages/Calendar";
import Phases from "../pages/privatePages/Phases";
import Evolution from "../pages/privatePages/Evolution";
import Tracking from "../pages/privatePages/Tracking";
import Recommendations from "../pages/privatePages/Recommendations";

const Router = () => {
  <BrowserRouter>
    <Routes>
      {/* RUTES PÚBLIQUES */}
      {/*   <Route index element={<Welcome />}></Route> */}
      <Route path="/welcome" element={<Welcome />}></Route>
      {/*       <Route path="/x" element={<Welcome />} />
      <Route path="/login/" element={<Login />} />
      <Route path="*" element={<ErrorPage />} /> */}
      {/*           <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      {/* 
      <Route path="/register/" element={<Register />} />

      <Route path="/description/" element={<Description />} />

      <Route path="/about/" element={<About />} /> */}

      {/* RUTES PRIVADES */}
      {/*  <Route
        path="/usermenu/"
        element={
          <PrivateRoute>
            <UserMenu />
          </PrivateRoute>
        }
      />

      <Route
        path="/todolist/"
        element={
          <PrivateRoute>
            <ToDoList />
          </PrivateRoute>
        }
      />

      <Route
        path="/calendar/"
        element={
          <PrivateRoute>
            <Calendar />
          </PrivateRoute>
        }
      />

      <Route
        path="/phases/"
        element={
          <PrivateRoute>
            <Phases />
          </PrivateRoute>
        }
      />

      <Route
        path="/evolution/"
        element={
          <PrivateRoute>
            <Evolution />
          </PrivateRoute>
        }
      />

      <Route
        path="/tracking/"
        element={
          <PrivateRoute>
            <Tracking />
          </PrivateRoute>
        }
      />

      <Route
        path="/recommendations/"
        element={
          <PrivateRoute>
            <Recommendations />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  </BrowserRouter>;
};

export default Router


_-----------
# AUTHCONTEXT
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
