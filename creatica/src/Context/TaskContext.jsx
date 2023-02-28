import { createContext, useContext, useState, useEffect } from "react";
import {
  arrayUnion,
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  Firestore,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { AuthContext } from "../Context/AuthContext";
import { async } from "@firebase/util";



export const TaskContext = createContext();
export function TaskContextProvider(props) {
  // ESTAT DE LES TASQUES
  const [tasks, setTasks] = useState([]);
  
  // PORTA CURRENTUSER I USERTASKLIST DEL CONTEXT
  const { currentUser } = useContext(AuthContext);

  // GUARDAR A BASE DE DADES QUAN CANVIA LA TASCA I MOSTRAR-LA
  useEffect(() => {
    setTaskList();
    loadData()
    console.log(tasks, "TASKS AL PRINCIPI")
  }, [tasks]);

// MOSTRAR LA BASE DE DADES NOMÉS CARREGAR LA PÀGINA
  useEffect(() => {
    loadData();
  }, []);

  // MOSTRAR LA LLISTA (QUE VE DE FIREBASE)
  async function loadData() {
    try {
      const userData = await db.collection("users").doc(currentUser.uid).get();
      setTasks(userData.data().userTaskList);
    } catch (error) {
      console.log(error);
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
        id: currentId,
      },
    ]);
  }

  // PUJA TASKLIST DE L'USER A FIRESTORE
  const setTaskList = async () => {
    if (currentUser !== null) {
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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
