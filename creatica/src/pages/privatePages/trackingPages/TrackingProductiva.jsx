import React from "react";
import { HeaderUser } from "../../../components/HeaderUser";
import trackProduc from "../../../assets/trackProduc.png";

function tracking() {
  return (
    <div>
      {/*     <HeaderUser/> */}
      <h3 className="sectionTitle">TRAQUEA TUS HABITOS</h3>
      <button className="trackButton">PRODUCTIVA</button>
      <button className="trackButton">DISTRAÍDA</button>
      <img className="imageDown" src={trackProduc}></img>
    </div>
  );
}

export default tracking;
