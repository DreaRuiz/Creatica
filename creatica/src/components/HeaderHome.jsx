import React from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeaderHome = () => {
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
                <Link to="/Login">Entrar</Link>
              </li>
              <li>
                <Link to="/Register">Registro</Link>
              </li>
            </ul>
          </div>

          <Link to="/Welcome">
            <p className="btn btn-ghost normal-case text-xl position-right">
              Creatica
            </p>
          </Link>
          <Link to="/UserMenu">
              {" "}
              <FontAwesomeIcon
                className="mr-4 ml-4 position-end"
                icon={faUser}
              />
            </Link>
        </div>
      </div>
    </>
  );
};


