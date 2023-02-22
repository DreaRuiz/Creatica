# AUTHCONTEXT
```jsx
import { createContext, useEffect, useState } from "react";

// IMPORTS DE FIREBASE
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../config/firebase";

// CREO EL CONTEXT
export const AuthContext = createContext();
// CREO EL PROVIDER (Que "entregarà" el que es guardi al context).
export const AuthProvider = ({ children }) => {
  // ESTATS
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [currentUser, setCurrentUser] = useState();
  const [error, setError] = useState("");

  // REGISTER
  const signup = async (email, password) => {
    try {
      // userCredential per poder guardar-ho després a la base de dades de firestore
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("usercredential", userCredential);
      updateProfile(auth.currentUser, { // UPDATEPROFILE Ho puja a la base de dades
        displayName: firstName,
      });
      const user = userCredential.user;
      console.log("user", user);
      sessionStorage.setItem("Auth Token", user.stsTokenManager.refreshToken); //
      // Guardem a la base de dades de firestore
      await setDoc(doc(db, "users", user.uid), { // Guarda a la base de dades, dins la col·lecció USERS, la ID (uid) d'aquest user. I crea també un email, name i taskList
        email,
        firstName,
        taskList: [],
        //* Aquí posar les coses que s'han de guardar a la base de dades (de cada user)
      });
      return true
    } catch (error) {
      console.log(error.message);
    }
  };
// LOGIN
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    sessionStorage.setItem('Auth Token', user.stsTokenManager.refreshToken)
    return true
  } catch (error){
    console.log(error.message)
  }
}

  // RESETPASSWORD
  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  // SIGnOUT / TANCAR SESSIÓ
  const logOut = async () => {
    try {
      await signOut(auth);
      navigate("/Welcome"); // Quan tanquis sessió ves a Welcome
      return true;
    } catch (error) {
      return false;
    }
  };
// COMPROVA SI L'USER ESTÀ LOGUEJAT
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [currentUser]);

  return ( // Prepara per exportar tot el que hi ha dins de value (per poder-ho fer servir fora del context)
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
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
        login,
        resetPassword,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

```
# REGISTER
```jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/Footer";
import register from "../../assets/register.png";


function Register() {
  const navigate = useNavigate();
  const { // Importo les funcions i els estats del context
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
    await signup ( email, password)

    navigate("/welcome");

    if(error){
      console.log(error)
    }
    setFirstName("") // Reestableixo els estats
    setLastName("")
    setEmail("")
    setPassword("")

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
              onChange={(e) => setFirstName(e.target.value)} // Canvio l'estat de FirstName pel del valor introduït al formualri
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

```

# LOGIN
```jsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.png";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, email, setEmail, password, setPassword, error, setError } =
    useContext(AuthContext); // Importo la funció i els estats del context

  // AUTENTIFICACIÓ / ERROR AL LOGIN
  const onLogin = async (e) => {
    e.preventDefault();
    await login(email, password); // Demano email i pass
    if (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid email or password");
    }
  
  console.log(error);
  setEmail(""); // Reestableixo els estats
  setPassword("");

  navigate("/UserMenu"); // Si aconsegueix loguejar-se l'envio a UserMenu
}
  return (
    <>
      <div className="loginWindow">
        <h1>¡HOLA!</h1>
        <div>
          <img className="imageLogin" src={loginImg}></img>
        </div>

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

```

# RESETPASS
```jsx
import React, { useContext, useState } from "react";
import { useRef } from "react";
import comofunciona from "../../assets/comofunciona.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

// EL MATEIX FIREBASE ENVIA EL MAIL DE REESTABLIR PASS AL emailRef introduit (validant que correspon a un user)
const ForgotPassword = () => {
  const emailRef = useRef();

  const { resetPassword, error, setError } = useContext(AuthContext); // Importo la funció resetPassword (del context)
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage(""); // Restauro els estats
      setError("");

      await resetPassword(emailRef.current.value); // Comprovo que el mail està a la base de dades
      setMessage("Sigue las instrucciones en tu email");
    } catch (error) {
      setError("Fallo al cambiar la contraseña");
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h3>REESTABLECER CONTRASEÑA</h3>
        <div>
          <img src={comofunciona}></img>
        </div>
        {error && (
          <>
            <div>
              <div role="alert">
                <div>
                  {error}

                  <div>
                    <button type="button">
                      <span>Cerrar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {message && (
          <>
            <div>
              <div role="alert">
                <div>
                  {message}

                  <div>
                    <button type="button">
                      <span>Cerrar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <p>Introduce tu email para cambiar la contraseña</p>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Introduce tu email"
                ref={emailRef}
                required
              />
            </label>

            <button>
              <span>ENVIAR EMAIL</span>
            </button>

            <p>
              {" "}
              ¿Necesitas una cuenta? <Link to="/register">Regístrate</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default ForgotPassword;

```
