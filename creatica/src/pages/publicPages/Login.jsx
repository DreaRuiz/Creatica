import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/login.png"

// COMPONENTS DE FIREBASE
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const Login = () => {
  const navigate = useNavigate();
  // ESTATS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // AUTENTIFICACIÓ / ERROR AL LOGIN
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/UserMenu");
        sessionStorage.setItem(
          "Auth Token",
          userCredential._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid email or password");
      });
  };

  return (
    <>
      <div className="loginWindow">
        <h1>¡HOLA!</h1>
        <div>
<img className="imageLogin" src={login}></img>
        </div>

        <form >
          <div >
            <input
              type="email"
              placeholder="Introduce tu email"
              autoComplete="on"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              minLength="6"
              required
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
            <Link className="forgotPass" type="link" to="/ForgotPassword">
              {" "}
              ¿Has olvidado tu contraseña?{" "}
            </Link>
            </div>
          </div>
          <button className="login" type="submit" onClick={onLogin}>
            INICIA SESIÓN
          </button>
          <div>
            <Link className="subtextLogin" type="link" to="/register/">
              {" "}
              O CREA UNA CUENTA{" "}
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
