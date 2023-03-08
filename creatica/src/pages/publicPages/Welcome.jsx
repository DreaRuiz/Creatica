import React from "react";
import Footer from "../../components/Footer";
import { HeaderHome } from "../../components/HeaderHome";
import welcome from "../../assets/welcome.png";
import sinTitulo_1 from "../../assets/sinTitulo_1.png";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <>
      <HeaderHome />
      <div className="welcome">
        <h1>CREATICA</h1>
        <h4>
          DESARROLLA TU PROYECTO <br />
          PONIENDO LA VIDA EN EL CENTRO
        </h4>
        <img src={welcome}></img>
        <p className="text">
          Si no sabes por dónde empezar, este es tu lugar. Aquí podrás trabajar
          de manera más amable, consciente y respetuosa con tus ritmos.Es un
          espacio de trabajo, aprendizaje y creación donde encontrarás
          información y herramientas para poner en marcha tu idea.
        </p>
        <Link type="link" to="/UserMenu/">
          <button className="login">EMPEZAR</button>‡
        </Link>
        <h2>¿CÓMO FUNCIONA?</h2>
        <div className="text">
          <p>
            En esta página encontrarás material para definir tu proyecto. Pensar
            qué quieres, para quién, cómo, dónde y definir todos los conceptos
            necesarios hasta llevarla a cabo. También tendrás acceso a material
            exclusivo para ayudarte en cada fase de tu proyecto.
          </p>
          <p>
            Podrás hacer un seguimiento de tu estado de ánimo y de las
            diferentes capacidades de trabajo en cada momento. Con esto y las
            recomendaciones diarias podrás sacarle el máximo partido a cada día
            siguiendo tus propios ritmos.
          </p>
          <p>
            Además, podrás organizar y agendar tus tareas pendientes para
            tenerlas siempre a mano.
          </p>
          
          <img src={sinTitulo_1}></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
