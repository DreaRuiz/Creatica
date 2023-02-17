import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

// QUÈ FA? Dòna format a la tasca
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h1>{task.title}</h1>
      <h3>{task.phase}</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Esborrar</button>
    </div>
  );
}

export default TaskCard;
