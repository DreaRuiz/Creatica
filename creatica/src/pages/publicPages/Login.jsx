import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import { AuthContext } from "../../Context/AuthContext";
import { HeaderHome } from "../../components/HeaderHome";

const Login = () => {
  const navigate = useNavigate();
  const { login, email, setEmail, password, setPassword, error, setError } =
    useContext(AuthContext);

  // AUTENTIFICACIÓ / ERROR AL LOGIN
  const onLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid email or password");
    }
    console.log(error);

    setEmail("");
    setPassword("");

    navigate("/UserMenu");
  };
  return (
    <>
      <HeaderHome />
      <div>
        <h1>¡HOLA!</h1>
        <div>
          <img className="imageLogin" src={loginImg}></img>
        </div>

        <form>
          <div>
            <div>
              <input
                className="input input-bordered input-primary rounded-full w-full max-w-xs mt-2 mb-1"
                type="email"
                placeholder="Introduce tu email"
                autoComplete="on"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                className="input input-bordered input-primary rounded-full w-full max-w-xs mt-2 mb-1"
                type="password"
                placeholder="Contraseña"
                minLength="6"
                required
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Link className="forgotPass" type="link" to="/ForgotPassword">
              {" "}
              ¿Has olvidado tu contraseña?{" "}
            </Link>
          </div>

          <button className="btn btn-primary rounded-full mt-3" type="submit" onClick={onLogin}>
            INICIA SESIÓN
          </button>
          <div>
            <Link className="subtextLogin" type="link" to="/register/">
              {" "}
              CREA UNA CUENTA{" "}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
