import { createContext, useContext, useState, useEffect } from "react";
import { arrayUnion, doc, setDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { AuthContext } from "../Context/AuthContext";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  // ESTAT DE LES TASQUES
  const [tasks, setTasks] = useState([]);

  const { currentUser } = useContext(AuthContext);

  // GUARDAR A BASE DE DADES QUAN CANVIA LA TASCA
  useEffect(() => {
    setTaskList();
  }, [tasks]);

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
        userTaskList: tasks
      });
      console.log("userTaskList", userTaskList);
    } else {
      alert('Inicia sesión para guardar')
    }
  };





// MOSTRAR LA LLISTA (QUE VE DE FIREBASE)


/*
exemple:
React.useEffect(() => {

  const obtenerDatos = async () => {
      const db = firebase.firestore()
      try {
          const data = await db.collection('tareas').get()
          const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
          console.log(arrayData)      
      } catch (error) {
          console.log(error)
      }
  }
  obtenerDatos()

}, [])
 */




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
