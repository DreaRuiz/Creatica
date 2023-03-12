import React from "react";
import Footer from "../../components/Footer";
import { HeaderUser } from "../../components/HeaderUser";
import { Link } from "react-router-dom";

function UserMenu() {
  return (
    <>
      <HeaderUser />
      <h2>***pàgina d'aterratge</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <br/>
      <Link type="link" to="/Phases/">
        <h2>EMPIEZA TU PROYECTO</h2>
      </Link>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. 
      </p>
      <Link type="link" to="/tracking/motivation">
        <h2>TRAQUEA HABITOS</h2>
      </Link>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s.
      </p>
      <Link type="link" to="/ToDoList/">
        <h2>LISTA DE TAREAS</h2>
      </Link>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.Dummy text ever
        since the 1500s.
      </p>
      <Footer />
    </>
  );
}

export default UserMenu;

// TODO: Crear una pàgina d'aterratge on expliqui les diferents coses que pots fer
<Link className="subtextLogin" type="link" to="/register/">
  {" "}
  O CREA UNA CUENTA{" "}
</Link>;
