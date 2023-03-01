import React from 'react'
import { HeaderUser } from '../../../components/HeaderUser'
import trackCreativa from '../../../assets/trackCreativa.png'
import { Link } from "react-router-dom";

function tracking() {
  return (
    <div>
{/*     <HeaderUser/> */}
     <h3 className='sectionTitle'>TRAQUEA TUS HABITOS</h3>
     <Link type="link" to="/TrackingFocus/"><button className='trackButton'>CREATIVA</button></Link>
     <Link type="link" to="/TrackingFocus/"><button className='trackButton'>FALTA DE IDEAS</button></Link>
     <img className='imageDown' src={trackCreativa}></img>
    </div>
  )
}

export default tracking

