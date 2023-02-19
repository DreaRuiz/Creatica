import React from "react";
import { HeaderUser } from "../../../components/HeaderUser";
import trackSociable from "../../../assets/trackSociable.png";

function tracking() {
  return (
    <div>
      {/*     <HeaderUser/> */}
      <h3 className="sectionTitle">TRAQUEA TUS HABITOS</h3>
      <button className="trackButton">SOCIABLE</button>
      <button className="trackButton">INTROSPECTIVA</button>
      <img className="imageLogin" src={trackSociable}></img>
    </div>
  );
}

export default tracking;
