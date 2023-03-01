import React from "react";
import { HeaderUser } from "../../../components/HeaderUser";
import trackSociable from "../../../assets/trackSociable.png";
import { Link } from "react-router-dom";

function tracking() {
  return (
    <div>
      {/*     <HeaderUser/> */}
      <h3 className="sectionTitle">TRAQUEA TUS HABITOS</h3>
      <Link type="link" to="/Recommendations/"><button className="trackButton">SOCIABLE</button></Link>
      <Link type="link" to="/Recommendations/"><button className="trackButton">INTROSPECTIVA</button></Link>
      <img className="imageLogin" src={trackSociable}></img>
    </div>
  );
}

export default tracking;