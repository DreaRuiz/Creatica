import React from "react";
import { HeaderUser } from "../../components/Headeruser";
import fases1img from "../../assets/fases1img.png"
import fasesDef2 from "../../assets/fasesDef2.png";

function Phases() {
  return (
    <>
      <HeaderUser />
      <div className="welcome">
        <h2>FASE: DEFINICIÓN</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer too
        </p>
        <img src={fases1img}></img>
        <h2>OBJETIVOS:</h2>
        <ul>
          <li>Objetivo 1</li>
          <li>Objetivo 2</li>
          <li>Objetivo 3</li>
          <li>Objetivo 4</li>
        </ul>
        <img src={fasesDef2}></img>
        <h2>MATERIAL</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="login">DESCARGAR</button>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer too
        </p>
        <button className="login">FASE COMPLETADA</button>
      </div>
      <button> anterior </button>
      <button> siguiente </button>
    </>
  );
}

export default Phases;
