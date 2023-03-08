import React, { useContext } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { PhaseStyle } from "../../styled";
import { Link } from "react-router-dom";
import { HeaderUser } from "../../components/HeaderUser";

function Evolution() {
  const { userPhase } = useContext(TaskContext);

  return (
    <>
      <HeaderUser />
      <PhaseStyle active={userPhase.definicion ? true : false}>
        {" "}
        <Link to="/phases/">Definición</Link>
      </PhaseStyle>

      <PhaseStyle active={userPhase.ideacion ? true : false}>
        {" "}
        <Link to="/phasesIdeacion/">Ideación</Link>
      </PhaseStyle>

      <PhaseStyle active={userPhase.creacion ? true : false}>
        {" "}
        <Link to="/phasesCreacion/">Creación</Link>
      </PhaseStyle>

      <PhaseStyle active={userPhase.prototipado ? true : false}>
        {" "}
        <Link to="/phasesPrototipado/">Prototipado</Link>
      </PhaseStyle>
      <PhaseStyle active={userPhase.testeo ? true : false}>
        {" "}
        <Link to="/phasesTesteo/">Testeo</Link>
      </PhaseStyle>
    </>
  );
}

export default Evolution;
