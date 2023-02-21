import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import register from "../../assets/register.png";

function Register() {
  const navigate = useNavigate();
  const {
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
    signup,
  } = useContext(AuthContext);

  // CREACIÓ D'UN NOU USER & VALIDACIÓ / ERROR
  const onSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);

    navigate("/welcome");

    if (error) {
      console.log(error);
    }
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="register">
        <h1>¡HOLA!</h1>
        <form className="registerForm">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apellido"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              required
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login" type="submit" onClick={onSubmit}>
            REGÍSTRATE
          </button>
          <div>
            <Link className="subtextLogin" to="/login/">
              {" "}
              O INICIA SESIÓN{" "}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;
