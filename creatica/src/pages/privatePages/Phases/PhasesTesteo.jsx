import React, { useContext } from "react";
import { HeaderUser } from "../../../components/Headeruser";
import fases1img from "../../../assets/fases1img.png";
import fasesDef2 from "../../../assets/fasesDef2.png";
import { Link } from "react-router-dom";
import { TaskContext } from "../../../Context/TaskContext";
import Pdf from "../../../assets/pdf/Testeo.pdf";

import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <h2>FASE: TESTEO</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer too
        </p>
        <img src={fases1img}></img>
        <h2>OBJETIVOS:</h2>
        <ul>
          <li>Objetivo 1</li>
          <li>Objetivo 2</li>
          <li>Objetivo 3</li>
          <li>Objetivo 4</li>
        </ul>
        <img src={fasesDef2}></img>
        <h2>MATERIAL</h2>
        <p>
          Aquí puedes descargar recursos que te ayudarán a enfrentar esta fase.
        </p>
        <button className="btn btn-outline btn-accent rounded-full mt-3 mb-3" onClick={downloadPdf}>
          Descargar
        </button>
        <p>
          Es importante que antes de pasar a la siguiente fase tengas definidos
          los objetivos de esta.
        </p>
        <Link type="link" to="/phasesFinal/">
          <button className="btn btn-outline btn-secondary rounded-full mt-3 mb-3"  onClick={() => savePhase(phase)}>
            FASE COMPLETADA
          </button>
        </Link>
      </div>
      <Link type="link" to="/phasesPrototipado/">
      <button><FontAwesomeIcon className="mr-4 ml-4" icon={faArrowLeft}/></button>
      </Link>
      <Link type="link" to="/phasesFinal/">
      <button><FontAwesomeIcon className="mr-4 ml-4" icon={faArrowRight}/></button>
      </Link>
    </>
  );
}

export default Phases;
