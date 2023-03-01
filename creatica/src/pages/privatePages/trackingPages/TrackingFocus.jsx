import React from 'react'
import { HeaderUser } from '../../../components/HeaderUser'
import trackFoco from '../../../assets/trackFoco.png'
import { Link } from "react-router-dom";

function tracking() {
  return (
    <div>
{/*     <HeaderUser/> */}
     <h3 className='sectionTitle'>TRAQUEA TUS HABITOS</h3>
     <Link type="link" to="/TrackingProductiva/"><button className='trackButton'>CONCENTRADA</button></Link>
     <Link type="link" to="/TrackingProductiva/"><button className='trackButton'>DISPERSA</button></Link>
     <img className='imageFocus' src={trackFoco}></img>
    </div>
  )
}

export default tracking

