/* import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from './Context/AuthProvider'
import { TaskContext } from './Context/TaskContext'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <TaskContext>
    <AuthP>
   
      <App />

    </AuthP>
    </TaskContext>
  </React.StrictMode>
);


 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContext, AuthProvider } from './Context/AuthContext'
import { TaskContextProvider } from './Context/TaskContext'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <TaskContextProvider>
    <AuthProvider>
   
      <App />

    </AuthProvider>
    </TaskContextProvider>
  </React.StrictMode>
);