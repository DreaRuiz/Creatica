import React from "react";
import { HeaderUser } from "../../../components/Headeruser";
import fases1img from "../../../assets/fases1img.png"
import fasesDef2 from "../../../assets/fasesDef2.png";

function Phases() {
  return (
    <>
      <HeaderUser />
      <div className="welcome">
        <h2>FASE: DEFINICIÓN</h2>
        <p>
          En esta fase, debemos recopilar y cribar la información para ir conformando el marco de nuestro proyecto.Buscar referentes y quedarnos con lo que realmente aporta valor. Identificaremos problemas cuyas soluciones serán clave para la obtención de un resultado innovador.


        </p>
        <img src={fases1img}></img>
        <h2>OBJETIVOS:</h2>
        <ul>
          <li>Definir qué problema solucionas</li>
          <li>Conocer el campo en el que se desarollará el proyecto</li>
          <li>Definir qué te diferencia de la competencia</li>
        </ul>
        <img src={fasesDef2}></img>
        <h2>MATERIAL</h2>
        <p>
          Aquí puedes descargar recursos que te ayudarán a enfrentar esta fase.
        </p>
        <button className="login">DESCARGAR</button>
        <p>
          Es importante que antes de pasar a la siguiente fase tengas definidos los objetivos de esta.
        </p>
        <button className="login">FASE COMPLETADA</button>
      </div>
      <button> anterior </button>
      <button> siguiente </button>
    </>
  );
}

export default Phases;
