import React from "react";
import TaskForm from "../../components/toDoList/TaskForm";
import TaskList from "../../components/toDoList/TaskList";
import { HeaderUser } from "../../components/HeaderUser";

function ToDoList() {
  return (
    <>
    <HeaderUser/>
      <div className="todolist">
        <h3 className="sectionTitle">AÑADE UNA TAREA</h3>
        <TaskForm />
      </div>
      <div>
      <h3 className="sectionTitle">TAREAS PENDIENTES</h3>
        <TaskList />
      </div>
    </>
  );
}

export default ToDoList;
