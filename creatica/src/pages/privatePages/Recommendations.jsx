import React, { useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

/* async  */function Recommendations() {
/*   const { currentUser } = useContext(AuthContext);

  const userRef = doc(db, "users", currentUser.uid);
  const userData = await getDoc(userRef);
  if (userData.exists()) {
    setSelectedTracks(userData.data().userTracking);
  }

 */
  return <div>Recommendations</div>;
}

export default Recommendations;
