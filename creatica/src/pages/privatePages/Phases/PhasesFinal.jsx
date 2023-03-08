import React from "react";
import { HeaderUser } from "../../../components/Headeruser";
import Pdf from "../../../assets/pdf/+info.pdf";

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
          Ahora solo queda lanzarlo al mundo. La comunicación es una fase más
          del proyecto así que estudia tu público y escoge bien los canales y el
          tono comuncativo que utilizarás.
        </p>
        <button className="login" onClick={downloadPdf}>Descargar</button>
      </div>
    </>
  );
}

export default PhasesFinal;
