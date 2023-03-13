import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { HeaderHome } from "../../components/HeaderHome";

function Register() {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    setFirstName,
    setLastName,
    password,
    setPassword,
    error,
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
      <HeaderHome />
      <div>
        <h1>¡HOLA!</h1>
        <form className="registerForm">
          <div>
            <input
              className="input input-bordered input-primary rounded-full w-full max-w-xs mt-2 mb-1"
              type="text"
              placeholder="Nombre"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="input input-bordered input-primary rounded-full w-full max-w-xs mt-2 mb-1"
              type="text"
              placeholder="Apellido"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="input input-bordered input-primary rounded-full w-full max-w-xs mt-2 mb-1"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input input-bordered input-primary rounded-full w-full max-w-xs mt-2 mb-1"
              type="password"
              placeholder="Contraseña"
              required
              minLength="6"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary rounded-full mt-3"
            type="submit"
            onClick={onSubmit}
          >
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
