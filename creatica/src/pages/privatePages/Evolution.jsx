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
        industry.
      </p>

      <ul className="steps steps-vertical mt-5">
        <li
          className={`step ${
            userPhase.definicion ? "step-primary" : ""
          } stepsList`}
        >
          <Link to="/phases/">Definición</Link>
        </li>
        <li
          className={`step ${
            userPhase.ideacion ? "step-primary" : ""
          } stepsList`}
        >
          <Link to="/phasesIdeacion/">Ideación</Link>
        </li>
        <li
          className={`step ${
            userPhase.creacion ? "step-primary" : ""
          } stepsList`}
        >
          <Link to="/phasesCreacion/">Creación</Link>
        </li>
        <li
          className={`step ${userPhase.testeo ? "step-primary" : ""} stepsList`}
        >
          <Link to="/phasesTesteo/">Testeo</Link>
        </li>
      </ul>
    </>
  );
}

export default Evolution;
