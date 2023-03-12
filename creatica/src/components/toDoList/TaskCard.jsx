import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { faClock, faTrash } from "@fortawesome/free-solid-svg-icons";
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
        <div className={`badge ${getBadgeColor(task.relevance)} rellevance`}>
          {task.relevance}
        </div>
        <div>
          <p className="card-actions time">
            <FontAwesomeIcon className="mt-" icon={faClock} />
            {task.time}
          </p>
        </div>
        <h2 className="card-title mt-3 textTaskCard">{task.title}</h2>
        <p className="card-actions textTaskCard"> {task.description}</p>

        <p className="card-actions textTaskCard">Fase: {task.phase}</p>
      </div>
      <div className="item-aling-down">
        <button
          className="btn btn-outline btn-error btn-trash rounded-full m-3"
          onClick={() => deleteTask(task.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
