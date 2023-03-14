import React from "react";
import { HeaderUser } from "../../../components/HeaderUser";
import Pdf from "../../../assets/pdf/+info.pdf";
import creatica22 from '../../../assets/img/creatica22.svg'

function PhasesFinal() {
  function downloadPdf() {
    const fileName = "+info.pdf";
    const pdfWindow = window.open(Pdf, "_blank");
    pdfWindow.document.title = fileName;
  }

  return (
    <>
      <HeaderUser />
      <div className="welcome">
        <h2>¡ENHORABUENA HAS ACABADO EL PROYECTO!</h2>
        <p>
          Una vez que tenemos nuestro producto o servicio, es hora de lanzarlo al mundo. En esta fase, la comunicación es fundamental, por lo que debemos estudiar a nuestro público objetivo y elegir cuidadosamente los canales y el tono de comunicación que utilizaremos.
        </p>
        <img src={creatica22} alt="Persona sentada con un portatil" className="my-image"></img>
        <br />
        <p>
          Aquí puedes descargar recursos que te ayudarán a finalizar tu proyecto.
        </p>
        <button className="btn btn-outline btn-accent rounded-full  mt-3 mb-3" onClick={downloadPdf}>
          Descargar
        </button>
      </div>
    </>
  );
}

export default PhasesFinal;
