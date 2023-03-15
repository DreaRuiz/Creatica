import TaskCard from "./TaskCard";
import { useContext, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";

function TaskList() {
  // SI NO HI HA TASQUES MOSTRA "No hay tareas pendientes"
  const { tasks } = useContext(TaskContext);
  const [shouldSort, setShouldSort] = useState(false);

  if (tasks.length === 0) {
    return <h4>No hay tareas pendientes</h4>;
  }

  // ORDENAR TASQUES SEGONS LA RELLEVÀNCIA
  let sortedTasks = [...tasks];
  if (shouldSort) {
    sortedTasks = tasks.sort((a, b) => {
      if (a.relevance === "urgente" && b.relevance !== "urgente") {
        return -1;
      } else if (a.relevance === "importante" && b.relevance === "futura") {
        return -1;
      } else if (a.relevance === "importante" && b.relevance === "urgente") {
        return 1;
      } else if (a.relevance === "futura" && b.relevance !== "futura") {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return (
    <div>
      <div className="taskListStyle">
        {sortedTasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
      {tasks.length > 1 && (
        <button
          className="btn btn-outline btn-primary rounded-full m-3"
          onClick={() => setShouldSort(true)}
        >
          Ordena por relevancia
        </button>
      )}
    </div>
  );
}
export default TaskList;
