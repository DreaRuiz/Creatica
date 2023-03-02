import React from "react";
import { HeaderUser } from "../../../components/Headeruser";
/* import faseProto from "../../../assets/faseProto.png"
import faseProto2 from "../../../assets/faseProto2.png"; */
import { Link } from "react-router-dom";

function Phases() {
  return (
    <>
      <HeaderUser />
      <div className="welcome">
        <h2>FASE: PROTOTIPADO</h2>
        <p>
        En la etapa de Prototipado volvemos las ideas realidad. Construir prototipos hace las ideas palpables y nos ayuda a visualizar las posibles soluciones. Además, pone de manifiesto elementos que debemos mejorar, refinar o cambiar antes de llegar al resultado final.
        </p>
{/*         <img src={faseProto2}></img> */}
        <h2>OBJETIVOS:</h2>
        <ul>
          <li>Materializar la idea</li>
          <li>Resolver los problemas que surjan durante la construcción</li>
          <li>Conocer la viabilidad del producto</li>
        </ul>
{/*         <img src={fasesProto}></img> */}
        <h2>MATERIAL</h2>
        <p>
        Aquí puedes descargar recursos que te ayudarán a enfrentar esta fase.
        </p>
        <button className="login">DESCARGAR</button>
        <p>
        Es importante que antes de pasar a la siguiente fase tengas definidos los objetivos de esta.
        </p>
        <Link type="link" to="/phasesTesteo/">
          <button className="login">FASE COMPLETADA</button>
        </Link>
      </div>
      <Link type="link" to="/phasesCreacion/">
        <button> anterior </button>
      </Link>
      <Link type="link" to="/phasesTesteo/">
        <button> siguiente </button>
      </Link>
    </>
  );
}

export default Phases;
