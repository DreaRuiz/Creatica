import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

function TaskList() {

  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h4>No hay tareas pendientes</h4>;
  }

  return (
    <div>
    <div className="taskListStyle">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
    </div>
  );
}

export default TaskList;
