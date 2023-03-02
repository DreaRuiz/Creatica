import React from "react";
import Footer from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import { Link } from "react-router-dom";

function UserMenu() {

  return (
    <>
      <HeaderUser />
      <Link type="link" to="/Phases/"><button className='trackButton'>EMPIEZA TU PROYECTO</button></Link>
      <Link type="link" to="/tracking/motivation"><button className='trackButton'>TRAQUEA HABITOS</button></Link>
      <Link type="link" to="/ToDoList/"><button className='trackButton'>LISTA DE TAREAS</button></Link>
      <Footer/>
    </>
  );
}

export default UserMenu;


<Link className="subtextLogin" type="link" to="/register/">
{" "}
O CREA UNA CUENTA{" "}
</Link>