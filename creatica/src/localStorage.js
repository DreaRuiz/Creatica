import { useEffect } from "react";

export const manageLocalStorage = (key, state, setState) => {
  // RECUPERAR LA INFO DEL LOCALSTORAGE (AL PRINCIPI)
  useEffect(() => {
    const restoredState = localStorage.getItem(key);
    if (restoredState) {
      setState(JSON.parse(restoredState));
    }
  }, []);

  // GUARDAR LA INFO AL LOCALSTORAGE (QUAN EL CODI ESTÀ FUNCIONANT)
  useEffect(() => localStorage.setItem(key, JSON.stringify(state)), [state]);
};
