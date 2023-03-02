/* import { createContext, useEffect, useState } from "react";
import React from "react";
import { AuthContext } from "../Context/AuthContext";

export const TrackContext = createContext();
export const TrackProvider = ({ children }) => {
  useEffect(() => {
    updatedTrack;
  }, [track]);

  const { currentUser } = useContext(AuthContext);
  const [track, setTrack] = useState([]);

  const setTrack = async () => {
    if (currentUser !== null) {
      const userTrack = doc(db, "users", `${currentUser.uid}`);
      await updateDoc(userTrack, {
        userTracking: track,
      });
    }
  };

  function updatedTrack() {
    return (
      <TrackContext.Provider
        value={{
          track,
          setTrack,
        }}
      >
        {children}
      </TrackContext.Provider>
    );
  }
};
 */