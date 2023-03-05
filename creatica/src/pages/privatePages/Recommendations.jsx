import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

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

  return (
    <div>
      <h2>Recommendations:</h2>
      <p>{recommendations}</p>
    </div>
  );
};

export default Recommendations;
