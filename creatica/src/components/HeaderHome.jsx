import React from "react";
import { Link } from "react-router-dom";


export const HeaderHome = () => {
  return (
    <>
      <Link to="/Login">LOG IN </Link>
      <Link to="/Register">REGISTER </Link>

      <Link to="/UserMenu">USER MENU</Link>
    </>
  );
}

