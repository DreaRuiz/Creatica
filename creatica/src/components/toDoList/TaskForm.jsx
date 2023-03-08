import { useState, useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [phase, setPhase] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [relevance, setRelevance] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      phase,
      description,
      time,
      relevance,
    });
    setTitle("");
    setPhase("");
    setDescription("");
    setTime("");
    setRelevance("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <select
            className="select select-primary select-sm max-w-xs m-1 rounded-full"
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
          >
            <option value="">Fase</option>
            <option value="definición">Definición</option>
            <option value="ideación">Ideación</option>
            <option value="creación">Creación</option>
            <option value="prototipado">Prototipado</option>
            <option value="testeo">Testeo</option>
          </select>
          <select
            className="select select-primary select-sm max-w-xs m-1 rounded-full"
            value={relevance}
            onChange={(e) => setRelevance(e.target.value)}
          >
            <option value="">Relevancia</option>
            <option value="importante">Importante</option>
            <option value="urgente">Urgente</option>
            <option value="futura">Futura</option>
          </select>

          <select
            className="select select-primary select-sm max-w-xs m-1 rounded-full"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Duración</option>
            <option value="30m">30min</option>
            <option value="1h">1h</option>
            <option value="2h">2h</option>
            <option value="más de 2h">+2h</option>
          </select>
        </div>
        <div>
          <input
            className="input input-bordered input-primary w-full max-w-xs mt-3 mb-3 rounded-full"
            placeholder="Añade tarea"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-primary w-full mb-3 rounded-full"
            placeholder="Añade descripción de la tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <button className="btn btn-primary rounded-full mb-3"> GUARDAR </button>
      </form>
    </>
  );
}

export default TaskForm;
