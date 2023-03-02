import React from "react";
import trackMoti from "../../../assets/trackMoti.png";
import { Link, useParams } from "react-router-dom";
import { userRecom } from "../../../data/userRecommendations";

function tracking() {
  const trackingId = useParams().trackingId;
  const currentTrack = userRecom[trackingId]; // key del current track
  const keys = Object.keys(userRecom); // Aconsegueixo l'array de keys
  const currentIndex = keys.indexOf(trackingId); // Posició per índex dins l'array de keys
  const nextTrackingId = keys[currentIndex + 1]; // Indica quina és la posició del següent títol

  let nextPage = "/tracking/" + nextTrackingId; // Ruta cap a la següent pàgina
  if (nextTrackingId == null) {
    nextPage = "/recommendations"; // Quan no hi ha més pàgines (objectes al json) salta a recomanacions.
  }

  return (
    <div>
      <h3 className="sectionTitle">TRAQUEA TUS HABITOS</h3>
      <Link type="link" to={nextPage}>
        <button className="trackButton">{currentTrack.positiveTitle}</button>
      </Link>
      <Link type="link" to={nextPage}>
        <button className="trackButton">{currentTrack.negativeTitle}</button>
      </Link>
      <img className="imageDown" src={trackMoti}></img>
    </div>
  );
}

export default tracking;

// Agafar amb useParams el final de la url (trackingId). Amb això mapejo els títols dels botons i la imatge. I també la pàgina següent (completar la url del link de forma dinàmica)?? /
