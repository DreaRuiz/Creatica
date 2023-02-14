import React from "react";
import { Link } from "react-router-dom";


export const HeaderHome = () => {
  return (
    <>
{/*       Logout */}

      <div>
        <Link to="/">HOME </Link>
        <Link to="/Description">DESCRIPTION </Link>
        <Link to="/About">ABOUT </Link>
      </div>
      <div>
      <Link to="/UserMenu">USER MENU</Link>
        <Link to="/Phases">PHASES</Link>
        <Link to="/Evolution">EVOLUTION </Link>
        <Link to="/Tracking">TRACKING </Link>
        <Link to="/Recommendations">RECCOMENDATIONS</Link>
        <Link to="/ToDoList">TO DO LIST </Link>
        <Link to="/Clandar">CALENDAR </Link>
      </div>
    </>
  );
}

