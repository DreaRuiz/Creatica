import React, { useContext } from "react";

import { HeaderUser } from "../../../components/HeaderUser";
import { Link } from "react-router-dom";
import { TaskContext } from "../../../Context/TaskContext";
import Pdf from "../../../assets/pdf/Ideacion.pdf";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import creatica14 from "../../../assets/img/creatica14.svg";
function Phases() {
  const { savePhase } = useContext(TaskContext);
  const phase = { ideacion: true };

  function downloadPdf() {
    const fileName = "Ideacion.pdf";
    const pdfWindow = window.open(Pdf, "_blank");
    pdfWindow.document.title = fileName;
  }

  return (
    <>
      <HeaderUser />
      <div className="welcome">
        <h2>IDEACIÓN</h2>
        <p>
          La fase de ideación tiene como objetivo la generación de opciones. No
          debemos quedarnos con la primera idea que se nos ocurra. En esta fase,
          las actividades favorecen el pensamiento expansivo y debemos eliminar
          los juicios de valor. Cuando hayas explorado las diferentes opciones
          tendrás la capacidad para escoger la mejor. Esta etapa debe acabar con
          una idea clara y concisa sobre cómo resolver el problema definido en
          la fase anterior.
        </p>

        <br />
        <h3 className="divider">Objetivos</h3>
        <ul>
          <li>Indagar sobre las diferents soluciones a un mismo problema</li>
          <li>Escoger la mejor solución para implementar en tu proyecto</li>
          <li>Hacer un listado de los distintos caminos hacia esa solución</li>
          <li>Definir la idea en palabras simples</li>
        </ul>
        <img src={creatica14}alt="Mujer en silla de ruedas con una pantalla"></img>
        <br />
        <h3>Material</h3>
        <p>
          Aquí puedes descargar recursos que te ayudarán a enfrentar esta fase.
        </p>
        <button
          className="btn btn-outline btn-accent rounded-full mt-3 mb-3"
          onClick={downloadPdf}
        >
          Descargar{" "}
        </button>
        <br />
        <p>
          Es importante que antes de pasar a la siguiente fase tengas definidos
          los objetivos de esta.
        </p>
        <Link type="link" to="/phasesCreacion/">
          <button
            className="btn btn-outline btn-secondary rounded-full mt-3 mb-3"
            onClick={() => savePhase(phase)}
          >
            FASE COMPLETADA
          </button>
        </Link>
      </div>
      <Link type="link" to="/phases/">
        <button>
          <FontAwesomeIcon className="mr-4 ml-4" icon={faArrowLeft} />
        </button>
      </Link>
      <Link type="link" to="/phasesCreacion/">
        <button>
          <FontAwesomeIcon className="mr-4 ml-4" icon={faArrowRight} />
        </button>
      </Link>
    </>
  );
}

export default Phases;
