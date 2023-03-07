import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

// DONA FORMAT A LA TASCA
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="todolistCard">
      <h4 className="textTask">Título de la tarea: {task.title}</h4>
      <h4 className="textTask">
        Fase: <b>{task.phase}</b>
      </h4>
      <p className="textTask">Descripción: {task.description}</p>

      <h4 className="textTask">Duración: {task.time}</h4>
      <h4 className="textTask">Relevancia: {task.relevance}</h4>

      <button className="delete" onClick={() => deleteTask(task.id)}>
        Esborrar
      </button>
    </div>
  );
}

export default TaskCard;
