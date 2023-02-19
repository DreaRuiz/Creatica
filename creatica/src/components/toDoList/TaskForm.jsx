import { useState, useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [phase, setPhase] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      phase,
      description,
    });
    setTitle("");
    setPhase("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Selecciona fase"
        onChange={(e) => setPhase(e.target.value)}
        value={phase}
        autoFocus
      />
      <input
        placeholder="Añade tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Añade descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <button> Guardar </button>
    </form>
  );
}

export default TaskForm;
