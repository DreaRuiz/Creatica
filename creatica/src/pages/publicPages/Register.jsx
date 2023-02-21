import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import register from "../../assets/register.png"

// Components de Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { ref, set, onValue } from "firebase/database";
function Register() {
  const navigate = useNavigate();

  // ESTATS
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  // CREACIÓ D'UN NOU USER & VALIDACIÓ / ERROR
  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        set(ref(db, "users/" + userCredential.user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
      })
      .catch((error) => {
        alert(error, "Enter a valid data");
      });
    // CREA LA RUTA
    navigate("/");

    //IMPORTA USER I MOSTRA PER CONSOLA
/*     let data = ref(db, "users/");
    onValue(data, (snapshot) => {
      data = snapshot.val();
    }); */
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
