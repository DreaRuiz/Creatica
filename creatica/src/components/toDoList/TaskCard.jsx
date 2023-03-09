import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// DONA FORMAT A LA TASCA
function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  function getBadgeColor(relevance) {
    if (relevance === "urgente") {
      return "badge-error";
    } else if (relevance === "importante") {
      return "badge-warning";
    } else if (relevance === "futura") {
      return "badge-primary";
    } else {
      return "badge-success";
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl m-3">
      <div>
        <div className={`badge ${getBadgeColor(task.relevance)}`}>
          {task.relevance}
        </div>
        <div>
        
          <p className="card-actions justify-end item-aling-top"><FontAwesomeIcon className="mt-1" icon={faClock} />{task.time}</p>
        </div>
        <h2 className="card-title mt-3">{task.title}</h2>
        <p className="card-actions justify-start"> {task.description}</p>

        <p className="card-actions justify-start">Fase: {task.phase}</p>
      </div>
      <div className="justify-end">
        <button
          className="btn btn-outline btn-error rounded-full m-3"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
