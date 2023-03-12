import React from "react";
import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { userRecom } from "../../data/userRecommendations";
import { AuthContext } from "../../Context/AuthContext";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { HeaderUser } from "../../components/HeaderUser";

function tracking() {
  // PORTA CURRENTUSER DEL CONTEXT
  const { currentUser } = useContext(AuthContext);
  // CREA ARRAT ON ES GUARARÀN ELS TEXTOS DEL TRACK
  const [selectedTracks, setSelectedTracks] = useState([]);

  // URL I CARREGAR LA SEGÜENT PÀGINA
  const trackingId = useParams().trackingId;
  const currentTrack = userRecom[trackingId]; // key del current track
  const keys = Object.keys(userRecom); // Aconsegueixo l'array de keys
  const currentIndex = keys.indexOf(trackingId); // Posició per índex dins l'array de keys
  const nextTrackingId = keys[currentIndex + 1]; // Indica quina és la posició del següent títol
  let nextPage = "/tracking/" + nextTrackingId; // Ruta cap a la següent pàgina
  if (nextTrackingId == null) {
    nextPage = "/recommendations"; // Quan no hi ha més pàgines (objectes al json) salta a recomanacions.
  }

  // GUARDAR A UN ARRAY ELS SELECCIONATS
  const addTrack = async (track) => {
    setSelectedTracks((prevSelectedTracks) => [...prevSelectedTracks, track]);
    if (currentUser != null) {
      const selectedTrackList = doc(db, "users", `${currentUser.uid}`);
      await updateDoc(selectedTrackList, {
        userTracking: [...selectedTracks, track],
      });
    }
  };

  return (
    <>
      <HeaderUser />
      {/*       //TODO: Pensar color els botons */}
      <h2 className="sectionTitle">TRAQUEA TUS HABITOS</h2>
      <div>
        <Link type="link" to={nextPage}>
          <button
            className="btn btn-active btn-success mt-10 btn-wide btn-lg rounded-full"
            onClick={() => addTrack(currentTrack.positiveText)}
          >
            {currentTrack.positiveTitle}
          </button>
        </Link>
      </div>
      <div>
        <Link type="link" to={nextPage}>
          <button
            className="btn btn-active btn-secondary mt-10 btn-wide btn-lg rounded-full"
            onClick={() => addTrack(currentTrack.negativeText)}
          >
            {currentTrack.negativeTitle}
          </button>
        </Link>
      </div>
    </>
  );
}

export default tracking;
