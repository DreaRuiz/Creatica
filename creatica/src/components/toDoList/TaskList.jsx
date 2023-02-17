import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1>Cap tasca pendent</h1>;
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
