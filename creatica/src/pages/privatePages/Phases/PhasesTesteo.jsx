import React, { useContext } from "react";
import { HeaderUser } from "../../../components/HeaderUser";
import { Link } from "react-router-dom";
import { TaskContext } from "../../../Context/TaskContext";
import Pdf from "../../../assets/pdf/Testeo.pdf";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import creatica8 from '../../../assets/img/creatica8.svg'

function Phases() {
  const { savePhase } = useContext(TaskContext);
  const phase = { testeo: true };

  function downloadPdf() {
    const fileName = "Testeo.pdf";
    const pdfWindow = window.open(Pdf, "_blank");
    pdfWindow.document.title = fileName;
  }

  return (
    <>
      <HeaderUser />
      <div className="welcome">
        <h2>TESTEO</h2>
        <p>
        "El testing es una etapa fundamental de cualquier proceso de proyecto. Se trata de probar el producto o servicio, y es recomendable que se involucren personas con diferentes perfiles para obtener una retroalimentación valiosa sobre su experiencia. Esto te ayudará a mejorar el producto y orientar tu estrategia de comunicación. Es importante recordar que cualquier cambio que realices es para mejorar tu proyecto, por lo que tengas miedo a retroceder y retomar desde donde sea necesario.
        </p>

        <br />
        <h3 className="divider">Objetivos</h3>
        <div className="containerList">
          <ul className="list">
          <li className="itemList">Validar la viabilidad real del producto</li>
          <li className="itemList">Conocer y poder mejorar aspectos que no habías tenido en cuenta</li>
          <li className="itemList">Ver los puntos fuertes y débiles del proyecto</li>
        </ul>
        </div>
        <br />
        <img src={creatica8} alt="Mujer sentada en una maleta con un portatil" className="my-image"></img>
        <h3>Material</h3>
        <p>
          Aquí puedes descargar recursos que te ayudarán a enfrentar esta fase.
        </p>
        <button className="btn btn-outline btn-accent rounded-full mt-3 mb-3" onClick={downloadPdf}>
          Descargar
        </button>
        <br />
        <p>
          Es importante que antes de pasar a la siguiente fase tengas definidos
          los objetivos de esta.
        </p>
        <Link type="link" to="/Evolution/">
          <button className="btn btn-outline btn-secondary rounded-full mt-3 mb-3"  onClick={() => savePhase(phase)}>
            FASE COMPLETADA
          </button>
        </Link>
      </div>
      <Link type="link" to="/phasesCreacion/">
      <button><FontAwesomeIcon className="mr-4 ml-4" icon={faArrowLeft}/></button>
      </Link>
      <Link type="link" to="/phasesFinal/">
      <button><FontAwesomeIcon className="mr-4 ml-4" icon={faArrowRight}/></button>
      </Link>
    </>
  );
}

export default Phases;
