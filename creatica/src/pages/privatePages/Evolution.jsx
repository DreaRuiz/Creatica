import React, { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { Link } from "react-router-dom";
import { HeaderUser } from "../../components/HeaderUser";

function Evolution() {
  const { userPhase } = useContext(TaskContext);

  return (
    <>
      <HeaderUser />

      <ul className="steps steps-vertical">
        <li className={`step ${userPhase.definicion ? "step-primary" : ""}`}>
          <Link to="/phases/">Definición</Link>
        </li>
        <li className={`step ${userPhase.ideacion ? "step-primary" : ""}`}>
          <Link to="/phasesIdeacion/">Ideación</Link>
        </li>
        <li className={`step ${userPhase.creacion ? "step-primary" : ""}`}>
          <Link to="/phasesCreacion/">Creación</Link>
        </li>
        <li className={`step ${userPhase.prototipado ? "step-primary" : ""}`}>
          <Link to="/phasesPrototipado/">Prototipado</Link>
        </li>
        <li className={`step ${userPhase.testeo ? "step-primary" : ""}`}>
          <Link to="/phasesTesteo/">Testeo</Link>
        </li>
      </ul>
    </>
  );
}

export default Evolution;