import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { HeaderUser } from "../../components/HeaderUser";

const Recommendations = () => {
  const { currentUser } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);

  // MOSTRAR LA BASE DE DADES AL CARREGAR LA PÀGINA
  useEffect(() => {
    loadRecommendations();
  }, [currentUser]);

  // PORTA EL TEXT DELS TRACKS SELECCIONATS DE FIRESTORE
  async function loadRecommendations() {
    try {
      const userRef = doc(db, "users", currentUser.uid);
      const userData = await getDoc(userRef);

      if (userData.exists()) {
        setRecommendations(userData.data().userTracking);
      } else {
      }
    } catch (error) {
      console.log(error);
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
      <p>{recommendations}</p>
    </div>
  );
};

export default Recommendations;
