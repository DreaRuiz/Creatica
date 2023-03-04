import React from "react";
import { useState, useContext } from "react";
import trackMoti from "../../assets/trackMoti.png";
import { Link, useParams } from "react-router-dom";
import { userRecom } from "../../data/userRecommendations";
import { AuthContext } from "../../Context/AuthContext";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";




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

  /* // GUARDAR A UN ARRAY ELS SELECCIONATS
  const addTrack = (track) => {
    setSelectedTracks([...selectedTracks, track]);
  };
  console.log("selectedTracks", selectedTracks); */

  // GUARDAR A UN ARRAY ELS SELECCIONATS
  const addTrack = async (track) => {
    setSelectedTracks([...selectedTracks, track]);
    if (currentUser != null) {
      const selectedTrackList = doc(db, "users", `${currentUser.uid}`);
      await updateDoc(selectedTrackList, {
        userTracking: selectedTracks,
      });
    }
  };

  console.log("selectedTracks", selectedTracks);

  return (
    <div>
      <h3 className="sectionTitle">TRAQUEA TUS HABITOS</h3>
      <Link type="link" to={nextPage}>
        <button
          onClick={() => addTrack(currentTrack.positiveText)}
          className="trackButton"
        >
          {currentTrack.positiveTitle}
        </button>
      </Link>
      <Link type="link" to={nextPage}>
        <button
          onClick={() => addTrack(currentTrack.negativeText)}
          className="trackButton"
        >
          {currentTrack.negativeTitle}
        </button>
      </Link>
      <img className="imageDown" src={trackMoti}></img>
    </div>
  );
}

export default tracking;