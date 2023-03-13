import { createContext, useContext, useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { AuthContext } from "../Context/AuthContext";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  // ESTAT DE LES TASQUES I FASES
  const [tasks, setTasks] = useState([]);
  const [userPhase, setUserPhase] = useState({
    definicion: false,
    ideacion: false,
    creacion: false,
    prototipado: false,
    testeo: false,
  });

  // PORTA CURRENTUSER I USERTASKLIST DEL CONTEXT
  const { currentUser } = useContext(AuthContext);

  /* // TO DO LIST // */
  // GUARDAR A BASE DE DADES QUAN CANVIA LA TASCA I MOSTRAR-LA
  useEffect(() => {
    setTaskList();
  }, [tasks]);

  // MOSTRAR LA BASE DE DADES NOMÉS CARREGAR LA PÀGINA
  useEffect(() => {
    loadData();
    loadPhases();
  }, [currentUser]);

  useEffect(() => {
    setPhasesList();
  }, [userPhase]);

  // MOSTRAR LA LLISTA (QUE VE DE FIREBASE)
  async function loadData() {
    if (currentUser == undefined) {
      return;
    }
    const userRef = doc(db, "users", currentUser.uid);
    const userData = await getDoc(userRef);
    if (userData.exists()) {
      setTasks(userData.data().userTaskList);
    }
  }

  // CREAR TASCA
  function createTask(task) {
    const lastId = Math.max(...tasks.map((task) => task.id), 0); // Crea un id en base a l'últim id.
    const currentId = lastId + 1;

    setTasks([
      ...tasks,
      {
        phase: task.phase,
        title: task.title,
        description: task.description,
        time: task.time,
        relevance: task.relevance,
        id: currentId,
      },
    ]);
  }

  // PUJA TASKLIST DE L'USER A FIRESTORE
  const setTaskList = async () => {
    if (currentUser != null) {
      const userList = doc(db, "users", `${currentUser.uid}`);
      await updateDoc(userList, {
        userTaskList: tasks,
      });
    }
  };

  // ELIMINAR TASCA
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  /* // FASES // */
  // GUARDAR FASES DEL PROJECTE COMPLETADES
  function savePhase(phases) {
    const updatedPhase = { ...userPhase, ...phases };
    setUserPhase(updatedPhase);
  }

  // PUJAR A FIREBASE LES FASES COMPLETADES
  const setPhasesList = async () => {
    if (currentUser != null) {
      const userPhaseList = doc(db, "users", `${currentUser.uid}`);
      await updateDoc(userPhaseList, {
        userPhases: userPhase,
      });
    }
  };
  // BAIXAR ESTAT DE LES FASES DE FIRESTORE
  async function loadPhases() {
    if (currentUser == undefined) {
      return;
    }
    const userRef = doc(db, "users", currentUser.uid);
    const userData = await getDoc(userRef);
    if (userData.exists()) {
      setUserPhase(userData.data().userPhases);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
        savePhase,
        userPhase,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
