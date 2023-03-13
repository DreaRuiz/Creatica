import React from "react";
import { Link } from "react-router-dom";
import { HeaderHome } from "../../components/HeaderHome";
import creatica6 from "../../assets/img/creatica6.svg";

const ErrorPage = () => {
  return (
    <section>
      <HeaderHome />
      <img src={creatica6} alt="Mapa" className="my-image"></img>
      <h1 className="textUps">Ups! Parece que ha habido un error</h1>
      <Link className="link link-primary" type="link" to="/Welcome">
        {" "}
        Volver a la página de inicio{" "}
      </Link>
    </section>
  );
};
export default ErrorPage;
