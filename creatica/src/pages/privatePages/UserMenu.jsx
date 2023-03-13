import React from "react";
import Footer from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import { Link } from "react-router-dom";
import creatica7 from "../../assets/img/creatica7.svg";
import {
  faBook,
  faListCheck,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserMenu() {
  return (
    <>
      <HeaderUser />

      <div className="text">
      <br/>
        <Link type="link" to="/Phases/">
          <h2><FontAwesomeIcon className="mr-4 ml-4" icon={faBook}/> EMPIEZA TU PROYECTO </h2>
        </Link>
        <p>
          En esta página encontrarás material para definir tu proyecto. Pensar
          qué quieres, para quién, cómo, dónde y definir todos los conceptos
          necesarios hasta llevarla a cabo. También tendrás acceso a material
          exclusivo para ayudarte en cada fase de tu proyecto.
        </p>
        <br />
        <Link type="link" to="/tracking/motivation">
          <h2><FontAwesomeIcon className="mr-4 ml-4" icon={faPenToSquare}/>TRAQUEA HABITOS</h2>
        </Link>
        <p>
          Podrás hacer un seguimiento de tu estado de ánimo y de las diferentes
          capacidades de trabajo en cada momento. Con esto y las recomendaciones
          diarias podrás sacarle el máximo partido a cada día siguiendo tus
          propios ritmos.
        </p>
        <br />
        <Link type="link" to="/ToDoList/">
          <h2><FontAwesomeIcon className="mr-4 ml-4" icon={faListCheck}/>LISTA DE TAREAS</h2>
        </Link>
        <p>
          Además, podrás organizar y agendar tus tareas pendientes para tenerlas
          siempre a mano.
        </p>
        <img src={creatica7} alt="Dos personas sentadas con un portatil cada una" className="my-image"></img>
      </div>

      <Footer />
    </>
  );
}

export default UserMenu;