import React from "react";
import { Link } from "react-router-dom";


export const HeaderHome = () => {
  return (
    <>
    HEADER-HOME :
      <Link to="/Login">LOG IN </Link>
      <Link to="/Register">REGISTER </Link>
      <div>
        <Link to="/">HOME </Link>
        <Link to="/Description">DESCRIPTION </Link>
        <Link to="/About">ABOUT </Link>
      </div>

      <Link to="/UserMenu">USER MENU</Link>
    </>
  );
}

