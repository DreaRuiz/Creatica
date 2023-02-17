import React, { useState } from "react";
import { useRef } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

// EL MATEIX FIREBASE ENVIA EL MAIL DE REESTABLIR PASS AL emailRef introduit (validant que correspon a un user)
const ForgotPassword = () => {
  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");

      await resetPassword(emailRef.current.value);
      setMessage("Sigue las instrucciones en tu email");
    } catch (error) {
      setError("Fallo al cambiar la contraseña");
      console.error(error);
    }

};
  return (
    <>
      <div>
        <h1>Reestablecer contraseña</h1>
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
            <div></div>
            <button>
              <span>Reestablecer contraseña</span>
            </button>

            <p>
              {" "}
              ¿Necesitas una cuenta?{" "}
              <Link to="/register">
                Regístrate
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
export default ForgotPassword