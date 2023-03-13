import React, { useContext, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { HeaderHome } from "../../components/HeaderHome";
import creatica13 from "../../assets/img/creatica13.svg";

// FIREBASE ENVIA EL MAIL DE REESTABLIRPASS (al emailRef introduit validant que correspon a un user)
const ForgotPassword = () => {
  const emailRef = useRef();

  const { resetPassword, error, setError, message, setMessage } =
    useContext(AuthContext);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");

      await resetPassword(emailRef.current.value);
      setMessage("Sigue las instrucciones en tu email");
    } catch (error) {
      setError("Fallo al cambiar la contraseña");
      console.log(error);
    }
  };
  return (
    <>
      <HeaderHome />
      <div>
        <h2>REESTABLECER CONTRASEÑA</h2>
        <div>
          <img src={creatica13} alt="Mujer saliendo de una tuerca" className="my-image"></img>
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
                className="input input-bordered input-primary w-full max-w-xs mt-3 mb-3 rounded-full normal-case"
                id="email"
                name="email"
                type="email"
                placeholder="Introduce tu email"
                ref={emailRef}
                required
              />
            </label>

            <button className="btn btn-primary rounded-full mt-3">
              <span>ENVIAR EMAIL</span>
            </button>

            <p className="subtextLogin m-3">
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
