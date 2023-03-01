import React from "react";
import Footer from "../../components/Footer";
import { HeaderHome } from "../../components/HeaderHome";
import welcome from '../../assets/welcome.png'
import sinTitulo_1 from '../../assets/sinTitulo_1.png'
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <>
      <HeaderHome />
      <div className="welcome">
        <h1>CREATICA</h1>
        <h4>DESARROLLA TU PROYECTO <br/>PONIENDO LA VIDA EN EL CENTRO</h4>
        <img src={welcome}></img>
        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too</p>
        <Link type="link" to="/UserMenu/"><button className="login">EMPEZAR</button></Link>
      <h2>¿CÓMO FUNCIONA?</h2>
      <div className="text">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too</p>
      <img src={sinTitulo_1}></img>
      </div>


      </div>
      <Footer />
    </>
  );
}

export default Welcome;
