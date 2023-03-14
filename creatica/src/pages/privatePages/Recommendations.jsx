import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  faListCheck,
  faArrowsToEye,
  faWrench,
  faLightbulb,
  faComments,
  faBicycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderUser } from "../../components/HeaderUser";
import creatica11 from "../../assets/img/creatica11.svg";

const Recommendations = () => {
  const { currentUser } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);

  // MOSTRAR LA BASE DE DADES AL CARREGAR LA PÀGINA
  useEffect(() => {
    loadRecommendations();
  }, [currentUser]);
  // DESCARREGAR PDF
  function downloadPdf() {
    const fileName = "Creacion.pdf";
    const pdfWindow = window.open(Pdf, "_blank");
    pdfWindow.document.title = fileName;
  }

  // PORTA EL TEXT DELS TRACKS SELECCIONATS DE FIRESTORE
  async function loadRecommendations() {
    if (currentUser == undefined) {
      return;
    }
    const userRef = doc(db, "users", currentUser.uid);
    const userData = await getDoc(userRef);

    if (userData.exists()) {
      setRecommendations(userData.data().userTracking);
    }
  }
  if (recommendations.length === 0) {
    return (
      <>
        <HeaderUser />
        <h4>Traquea tu estado para poder ver las recomendaciones del día </h4>
        <Link to="/Tracking/motivation">
          {" "}
          <button className="btn btn-outline btn-primary rounded-full mt-3">
            {" "}
            <FontAwesomeIcon className="mr-4 ml-4" icon={faListCheck} /> Ir a
            tracking{" "}
          </button>
        </Link>
      </>
    );
  }
  return (
    <div>
      <HeaderUser />
      <h2>RECOMENDACIONES</h2>
      <div className="recom">
      <div>
        <img
          className="image my-image"
          src={creatica11}
          alt="Mujer sentada junto a una planta"
        ></img>
        </div>
        <br />
        <p style={{ alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faBicycle}
            style={{ marginRight: "0.5rem", color: "#65C3C8" }}
          />
          {recommendations[0]}
        </p>
        <br />

        <p style={{ alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faArrowsToEye}
            style={{ marginRight: "0.5rem", color: "#65C3C8" }}
          />
          {recommendations[1]}
        </p>
        <br />

        <p style={{ alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faLightbulb}
            style={{ marginRight: "0.5rem", color: "#65C3C8" }}
          />
          {recommendations[2]}
        </p>
        <br />

        <p style={{ alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faWrench}
            style={{ marginRight: "0.5rem", color: "#65C3C8" }}
          />
          {recommendations[3]}
        </p>
        <br />

        <p style={{ alignItems: "center" }}>
          {" "}
          <FontAwesomeIcon
            className=""
            icon={faComments}
            style={{ marginRight: "0.5rem", color: "#65C3C8" }}
          />
          {recommendations[4]}
        </p>
      </div>

      <div>
        <h3 className="divider">Material</h3>
        <p>
          Aquí puedes descargar recursos que te ayudarán a enfrentar
          organización del proyecto y la gestión de bloqueos.
        </p>
        <button
          className="btn btn-outline btn-accent rounded-full mt-3 mb-3"
          onClick={downloadPdf}
        >
          Descargar
        </button>
      </div>
    </div>
  );
};

export default Recommendations;
