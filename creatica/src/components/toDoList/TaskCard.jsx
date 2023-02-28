import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

// DONA FORMAT A LA TASCA
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="todolistCard">
      <h4 className="textTask">{task.title}</h4>
      <h4 className="textTask"><b>{task.phase}</b></h4>
      <p className="textTask">{task.description}</p>
      <button className="delete" onClick={() => deleteTask(task.id)}>Esborrar</button>
    </div>
  );
}

export default TaskCard;
