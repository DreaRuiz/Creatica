import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import { faListCheck } from "@fortawesome/free-solid-svg-icons";
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
      <img
            className="image my-image"
            src={creatica11}
            alt="Mujer sentada junto a una planta"
          ></img>
      <p>{recommendations[0]}</p>
      <br/>
      <p>{recommendations[1]}</p>
      <br/>
      <p>{recommendations[2]}</p>
      <br/>
      <p>{recommendations[3]}</p>
      <br/>
      <p>{recommendations[4]}</p>
      </div>
{/*       <p>{recommendations}</p> */}
    </div>
  );
};

export default Recommendations;
