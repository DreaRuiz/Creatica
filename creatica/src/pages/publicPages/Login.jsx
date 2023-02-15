import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

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
      <div>
        <h2>Inicia sesión</h2>
        <form>
          <div>
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
          </div>
          <button type="submit" onClick={onLogin}>
            Iniciar sesión
          </button>
          <p>
            ¿Aún no tienes cuenta?
            <Link type="link" to="/register/">
              {" "}
              Regístrate{" "}
            </Link>
          </p>
          <Link type="link" to="/ForgotPassword">
            {" "}
            ¿Has olvidado tu contraseña?{" "}
          </Link>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
