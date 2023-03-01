import React from "react";
import { HeaderUser } from "../../../components/HeaderUser";
import trackProduc from "../../../assets/trackProduc.png";
import { Link } from "react-router-dom";

function tracking() {
  return (
    <div>
      {/*     <HeaderUser/> */}
      <h3 className="sectionTitle">TRAQUEA TUS HABITOS</h3>
      <Link type="link" to="/TrackingSociable/"><button className="trackButton">PRODUCTIVA</button></Link>
      <Link type="link" to="/TrackingSociable/"><button className="trackButton">DISTRAÍDA</button></Link>
      <img className="imageDown" src={trackProduc}></img>
    </div>
  );
}

export default tracking;
