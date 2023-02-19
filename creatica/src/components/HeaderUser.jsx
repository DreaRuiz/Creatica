import React from "react";
import { Link } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import app from '../config/firebase'


export const HeaderUser = () => {
const auth = getAuth(app)
const logout = () => {
  signOut(auth)
}
  
  return (
    <>
      <div>
        <Link to="/">HOME </Link>
      </div>
      <div>
     <Link onClick={logout}>Cerrar sesión</Link>
      </div>
      <div>
        <Link to="/UserMenu">USER MENU</Link>
        <Link to="/Phases">PHASES</Link>
   {/*      <Link to="/Evolution">EVOLUTION </Link> */}
        <Link to="/Tracking">TRACKING </Link>
     {/*    <Link to="/Recommendations">RECCOMENDATIONS</Link> */}
        <Link to="/ToDoList">TO DO LIST </Link>
    {/*     <Link to="/Calendar">CALENDAR </Link> */}
      </div>
    
    </>
  );
};
