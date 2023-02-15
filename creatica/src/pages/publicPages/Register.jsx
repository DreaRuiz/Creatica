import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
/* import { HeaderHome } from "../../components/HeaderHome"; */

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
    let data = ref(db, "users/");
    onValue(data, (snapshot) => {
      data = snapshot.val();
      console.log(data);
    });
  };
  return (
    <>
      <div>
        <h2>Crea tu cuenta</h2>
        <form>
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
          <button type="submit" onClick={onSubmit}>
            Regístrate
          </button>
          <p>
            ¿Ya tienes cuenta?
            <Link to="/login/">
              {" "}
              Inicia sesión{" "}
            </Link>
          </p>
        </form>
      </div>

      <Footer />
    </>
  );
}
export default Register;
