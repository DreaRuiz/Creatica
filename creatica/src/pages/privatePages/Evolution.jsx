import React, { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { Link } from "react-router-dom";
import { HeaderUser } from "../../components/HeaderUser";

function Evolution() {
  const { userPhase } = useContext(TaskContext);

  return (
    <>
      <HeaderUser />
      <h2>EVOLUCIÓN DEL PROYECTO</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p></p>

      <ul className="steps steps-vertical mt-5">
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
