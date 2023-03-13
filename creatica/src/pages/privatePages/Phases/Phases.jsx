import React, { useContext } from "react";
import { HeaderUser } from "../../../components/HeaderUser";
import { Link } from "react-router-dom";
import { TaskContext } from "../../../Context/TaskContext";
import Pdf from "../../../assets/pdf/Definicion.pdf";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import creatica20 from "../../../assets/img/creatica20.svg";

function Phases() {
  const { savePhase } = useContext(TaskContext);
  const phase = { definicion: true };

  // OBRIR PDF EN UNA FINESTRA NOVA AMB POSSIBILITAT DE DESCARREGAR-HO (pdf guardat a assets)
  function downloadPdf() {
    const fileName = "Definicion.pdf";
    const pdfWindow = window.open(Pdf, "_blank");
    pdfWindow.document.title = fileName;
  }

  return (
    <>
      <HeaderUser />
      <div>
        <h2>DEFINICIÓN</h2>
        <p>
          En esta fase, debemos recopilar y cribar la información para ir
          conformando el marco de nuestro proyecto. Buscar referentes y
          quedarnos con lo que realmente aporta valor. Identificaremos problemas
          cuyas soluciones serán clave para la obtención de un resultado
          innovador.
        </p>
        <br />
        <img src={creatica20} alt="Mujer con un microscopio" className="my-image"></img>

        <h3 className="divider">Objetivos</h3>
        <div className="containerList">
          <ul className="list">
            <li>Definir qué problema solucionas</li>
            <li>Conocer el campo en el que se desarollará el proyecto</li>
            <li>Definir qué te diferencia de la competencia</li>
          </ul>
        </div>
        <br />

        <h3>Material</h3>
        <p>
          Aquí puedes descargar recursos que te ayudarán a enfrentar esta fase.
        </p>
        <button
          className="btn btn-outline btn-accent rounded-full mt-3 mb-3"
          onClick={downloadPdf}
        >
          Descargar
        </button>
        <br />
        <p>
          Es importante que antes de pasar a la siguiente fase tengas definidos
          los objetivos de esta.
        </p>
        <Link type="link" to="/Evolution/">
          <button
            className="btn btn-outline btn-secondary rounded-full mt-3 mb-3"
            onClick={() => savePhase(phase)}
          >
            FASE COMPLETADA
          </button>
        </Link>
      </div>
      <Link type="link" to="/phasesIdeacion/">
        <button>
          <FontAwesomeIcon className="mr-4 ml-4" icon={faArrowRight} />
        </button>
      </Link>
    </>
  );
}

export default Phases;
