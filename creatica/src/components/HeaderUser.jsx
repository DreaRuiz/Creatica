import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext'



export const HeaderUser = () => {
  const {logOut, currentUser} = useContext(AuthContext)
  const handleLogOut = async () => {
    await logOut()
  }
  return (
    <>
      <div>
        <Link to="/">HOME </Link>
      </div>
      <div>
     <Link onClick={handleLogOut}>Cerrar sesión</Link>
      </div>
      <div>
        <Link to="/UserMenu">USER MENU</Link>
        <Link to="/Phases">PHASES</Link>
        <Link to="/Evolution">EVOLUTION </Link>
        <Link to="/Tracking">TRACKING </Link>
     {/*    <Link to="/Recommendations">RECCOMENDATIONS</Link> */}
        <Link to="/ToDoList">TO DO LIST </Link>
    {/*     <Link to="/Calendar">CALENDAR </Link> */}
      </div>
    
    </>
  );
};