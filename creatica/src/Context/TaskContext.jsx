import { createContext, useContext, useState, useEffect } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { AuthContext } from "../Context/AuthContext";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const { currentUser } = useContext(AuthContext);

  // ESTAT DE LES TASQUES
  const [tasks, setTasks] = useState([]);

  // CREAR TASCA
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        phase: task.phase,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  // ELIMINAR TASCA
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // ACTUALITZAR L'ESTAT DEL LLISTAT DE TASQUES
  useEffect(() => {
    setTasks(tasks);
  }, []);
  console.log("tasks al TaskContext", tasks);

  // PUJAR A LA BASE DE DADES LA TASKLIST DE L'USER
  const addTaskList = async () => {
    if (currentUser !== null) {
      const userTaskList = doc(db, "users", `${currentUser.uid}`);
      setTasks(tasks);

      await updateDoc(userTaskList, {
        userTaskList: arrayUnion({
          tasks,
        }),
      });
    }
  };

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
