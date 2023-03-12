import React from "react";
import Footer from "../../components/Footer";
import { HeaderHome } from "../../components/HeaderHome";
import { Link } from "react-router-dom";
import creatica12 from '../../assets/img/creatica12.svg'
import creatica7 from '../../assets/img/creatica7.svg'

export function Welcome() {
  return (
    <>
      <HeaderHome />
      <div className="welcome">

        <h1>
        Desarrolla tu proyecto poniendo la vida en el centro
        </h1>
        <img src={creatica12}></img>
        <p className="text">
          Si no sabes por dónde empezar, este es tu lugar. Aquí podrás trabajar
          de manera más amable, consciente y respetuosa con tus ritmos.Es un
          espacio de trabajo, aprendizaje y creación donde encontrarás
          información y herramientas para poner en marcha tu idea.
        </p>
        <Link type="link" to="/UserMenu/">
          <button className="btn btn-outline btn-primary rounded-full m-5">EMPEZAR</button>
        </Link>
        <h2>¿CÓMO FUNCIONA?</h2>
        <div className="text">
          <p>
            En esta página encontrarás material para definir tu proyecto. Pensar
            qué quieres, para quién, cómo, dónde y definir todos los conceptos
            necesarios hasta llevarla a cabo. También tendrás acceso a material
            exclusivo para ayudarte en cada fase de tu proyecto.
          </p>

          <br/>
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
          
          <img src={creatica7}></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
