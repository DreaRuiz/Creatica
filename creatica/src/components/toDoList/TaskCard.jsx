import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

// DONA FORMAT A LA TASCA
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="todolistCard">
      <p>Título de la tarea: {task.title}</p>
      <p>
        Fase: <b>{task.phase}</b>
      </p>
      <p>Descripción: {task.description}</p>

      <p>Duración: {task.time}</p>
      <p>Relevancia: {task.relevance}</p>

      <button className="delete" onClick={() => deleteTask(task.id)}>
        Esborrar
      </button>
    </div>
  );
}

export default TaskCard;
