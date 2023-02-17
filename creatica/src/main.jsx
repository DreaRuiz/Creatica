import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthContextProvider from './Context/AuthContext'
import { TaskContextProvider } from './Context/TaskContext'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <TaskContextProvider>
    <AuthContextProvider>
   
      <App />

    </AuthContextProvider>
    </TaskContextProvider>
  </React.StrictMode>
);
