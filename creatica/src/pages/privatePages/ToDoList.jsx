import React from "react";
import TaskForm from "../../components/toDoList/TaskForm";
import TaskList from "../../components/toDoList/TaskList";
import { HeaderUser } from "../../components/HeaderUser";

function ToDoList() {
  return (
    <>
      <HeaderUser />
      <h2>LISTA DE TAREAS</h2>
      <div className="todolist">
    
          <h3 className="divider">Añade una tarea</h3>
   

        <TaskForm />
      </div>
      <div>
        <h3 className="divider">Tareas pendientes</h3>
        <TaskList />
      </div>
    </>
  );
}

export default ToDoList;
