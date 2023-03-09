import React, { useContext } from "react";
import { HeaderUser } from "../../../components/Headeruser";
import fases1img from "../../../assets/fases1img.png";
import fasesDef2 from "../../../assets/fasesDef2.png";
import { Link } from "react-router-dom";
import { TaskContext } from '../../../Context/TaskContext'
import Pdf from "../../../assets/pdf/Creacion.pdf";

function Phases() {
  const { savePhase } = useContext(TaskContext);
  const phase = {creacion: true}

  function downloadPdf() {
    const fileName = "Creacion.pdf";
    const pdfWindow = window.open(Pdf, "_blank");
    pdfWindow.document.title = fileName;
  }

  return (
    <>
      <HeaderUser />
      <div className="welcome">
        <h2>FASE: CREACIÓN</h2>
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
        <button className="login" onClick={downloadPdf}>Descargar</button>
        <p>
          Es importante que antes de pasar a la siguiente fase tengas definidos
          los objetivos de esta.
        </p>
        <Link type="link" to="/phasesPrototipado/">
          <button onClick={() => savePhase(phase)} className="login">FASE COMPLETADA</button>
        </Link>
      </div>
      <div className="btn-group grid grid-cols-2">
      <Link type="link" to="/phasesIdeacion/">
        <button className="btn btn-outline rounded-full mr-5"> anterior </button>
      </Link>
      <Link type="link" to="/phasesPrototipado/">
        <button className="btn btn-outline rounded-full ml-5"> siguiente </button>
      </Link>
      </div>
    </>
  );
}

export default Phases;
