import React, { useContext } from "react";

import { HeaderUser } from "../../../components/Headeruser";
/* import faseIdea from "../../../assets/phaseIdea.png"
import faseIdea2 from "../../../assets/fasesIdea2.png"; */
import { Link } from "react-router-dom";
import { TaskContext } from '../../../Context/TaskContext'

function Phases() {
  const { savePhase } = useContext(TaskContext);
  const phase = "ideacion"
  return (
    <>
      <HeaderUser />
      <div className="welcome">
        <h2>FASE: IDEACIÓN</h2>
        <p>
          La fase de ideación tiene como objetivo la generación de opciones. No
          debemos quedarnos con la primera idea que se nos ocurra. En esta fase,
          las actividades favorecen el pensamiento expansivo y debemos eliminar
          los juicios de valor. Cuándo hayas exporado las diferentes opciones
          tendrás la capacidad para escoger la mejor. Esta fase debe acabar con
          una idea clara y concisa sobre cómo resolver el problema elaborado en
          la fase anterior.
        </p>
{/*         <img src={faseIdea2}></img> */}
        <h2>OBJETIVOS:</h2>
        <ul>
          <li>Indagar sobre las diferents soluciones a un mismo problema</li>
          <li>Escoger la mejor solución para implementar en tu proyecto</li>
          <li>Hacer un listado de los diferentes caminos hacia esa solución</li>
          <li>Definir la idea en palabras simples</li>
        </ul>
{/*         <img src={faseIdea}></img> */}
        <h2>MATERIAL</h2>
        <p>
          Aquí puedes descargar recursos que te ayudarán a enfrentar esta fase.
        </p>
        <button className="login">DESCARGAR</button>
        <p>
          Es importante que antes de pasar a la siguiente fase tengas definidos
          los objetivos de esta.
        </p>
        <Link type="link" to="/phasesCreacion/">
          <button onClick={() => savePhase(phase)} className="login">FASE COMPLETADA</button>
        </Link>
      </div>
      <Link type="link" to="/phases/">
        <button> anterior </button>
      </Link>
      <Link type="link" to="/phasesCreacion/">
        <button> siguiente </button>
      </Link>
    </>
  );
}

export default Phases;
