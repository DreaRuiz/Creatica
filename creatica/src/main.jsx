import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from './Context/AuthContext'
import { TaskContextProvider } from './Context/TaskContext'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>
   <TaskContextProvider>   
      <App />

    </TaskContextProvider>
    </AuthProvider>
  </React.StrictMode>
);