//Rutes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes/";

// Context
import { AuthProvider } from "../Context/AuthContext";

// Rutes públiques
import Welcome from "../pages/publicPages/Welcome";
import Login from "../pages/publicPages/Login";
import ErrorPage from "../pages/publicPages/ErrorPage";
import Register from "../pages/publicPages/Register";
import ForgotPassword from "../pages/publicPages/ForgotPassword";

// Rutes privades
import UserMenu from "../pages/privatePages/UserMenu";
import ToDoList from "../pages/privatePages/ToDoList";
import Calendar from "../pages/privatePages/Calendar";
import Phases from "../pages/privatePages/Phases/Phases";
import Evolution from "../pages/privatePages/Evolution";
import Tracking from "../pages/privatePages/trackingPages/Tracking";
import Recommendations from "../pages/privatePages/Recommendations";

// Phases
import PhasesIdeacion from "../pages/privatePages/Phases/PhasesIdeacion";
import PhasesCreacion from "../pages/privatePages/Phases/PhasesCreacion";
import PhasesPrototipado from "../pages/privatePages/Phases/PhasesPrototipado";
import PhasesTesteo from "../pages/privatePages/Phases/PhasesTesteo";
import PhasesFinal from "../pages/privatePages/Phases/PhasesFinal";

const Router = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* RUTES PÚBLIQUES */}
        <Route index element={<Welcome />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/login/" element={<Login />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
        {/* RUTES PRIVADES */}
        <Route
          path="/usermenu/"
          element={
            <PrivateRoute>
              <UserMenu />
            </PrivateRoute>
          }
        />
        <Route
          path="/todolist/"
          element={
            <PrivateRoute>
              <ToDoList />
            </PrivateRoute>
          }
        />
        <Route
          path="/calendar/"
          element={
            <PrivateRoute>
              <Calendar />
            </PrivateRoute>
          }
        />
        <Route
          path="/phases/"
          element={
            <PrivateRoute>
              <Phases />
            </PrivateRoute>
          }
        />
        <Route
          path="/evolution/"
          element={
            <PrivateRoute>
              <Evolution />
            </PrivateRoute>
          }
        />
        <Route
          path="/recommendations/"
          element={
            <PrivateRoute>
              <Recommendations />
            </PrivateRoute>
          }
        />
        {/*         TRACKING ROUTES */}
        <Route
          path="/tracking/:trackingId"
          element={
            <PrivateRoute>
              <Tracking />
            </PrivateRoute>
          }
        />

        {/*         PHASES ROUTES */}
        <Route
          path="/phasesIdeacion/"
          element={
            <PrivateRoute>
              <PhasesIdeacion />
            </PrivateRoute>
          }
        />
        <Route
          path="/phasesCreacion/"
          element={
            <PrivateRoute>
              <PhasesCreacion />
            </PrivateRoute>
          }
        />
        <Route
          path="/phasesPrototipado/"
          element={
            <PrivateRoute>
              <PhasesPrototipado />
            </PrivateRoute>
          }
        />
        <Route
          path="/phasesTesteo/"
          element={
            <PrivateRoute>
              <PhasesTesteo />
            </PrivateRoute>
          }
        />
        <Route
          path="/phasesFinal/"
          element={
            <PrivateRoute>
              <PhasesFinal />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default Router;
