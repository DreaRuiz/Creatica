import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  // ESTAT DE LES TASQUES
  const [tasks, setTasks] = useState([]);

  // FUNCTIÓ PER CREAR TASCA
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        description: task.description,
      },
    ]);
  }

  // FUNCTIÓ PER ELIMINAR TASCA
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // ACTUALITZADOR DE L'ESTAT
  useEffect(() => {
    setTasks(tasks);
  }, []);

  // TASKCONTEXT i per tant CREATECONTENT retorna (array task, funció createTask i funció deleteTask)
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
