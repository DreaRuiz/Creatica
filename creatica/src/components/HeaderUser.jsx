import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

import {
  faBook,
  faListCheck,
  faPenToSquare,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderUser = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = async () => {
    await logOut();
  };

  // OBTENIR LA RUTA ACTUAL
  const location = useLocation();

  // ESTIL PER LES ICONES ACTIVES
  const activeStyles = { color: "#65C3C8" };

  return (
    <>
      <div className="navbar bg-white rounded-full p-0 mb-5 position-center w-full">
        <div className="navbar flex justify-between items-center px-4">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-50"
            >
              <li>
                <Link to="/Welcome">Home</Link>
              </li>
              <li>
                <Link to="/Evolution">Evolución</Link>
              </li>
              <li>
                <Link to="/Recommendations">Recomendaciones</Link>
              </li>
              <li>
                <Link to="/Welcome" onClick={handleLogOut}>
                  Cerrar sesión
                </Link>
              </li>
            </ul>
          </div>

          <div className="icon-container flex justify-end">
            <div className="icon-container">
              <Link to="/Phases">
                {" "}
                <FontAwesomeIcon
                  className="mr-4 ml-4"
                  icon={faBook}
                  style={
                    location.pathname === "/Phases" ? activeStyles : undefined
                  }
                />
              </Link>

              <Link to="/Tracking/motivation">
                {" "}
                <FontAwesomeIcon
                  className="mr-4 ml-4"
                  icon={faPenToSquare}
                  style={
                    location.pathname === "/Tracking/motivation"
                      ? activeStyles
                      : undefined
                  }
                />
              </Link>

              <Link to="/ToDoList">
                {" "}
                <FontAwesomeIcon
                  className="mr-4 ml-4"
                  icon={faListCheck}
                  style={
                    location.pathname === "/ToDoList" ? activeStyles : undefined
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
