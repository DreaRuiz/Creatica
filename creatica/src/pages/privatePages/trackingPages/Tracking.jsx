import React from 'react'
import { HeaderUser } from '../../../components/HeaderUser'
import trackMoti from '../../../assets/trackMoti.png'
import { Link } from "react-router-dom";

function tracking() {
  return (
    <div>
{/*     <HeaderUser/> */}
     <h3 className='sectionTitle'>TRAQUEA TUS HABITOS</h3>
     <Link type="link" to="/TrackingCreativity/"><button className='trackButton'>MOTIVADA</button></Link>
     <Link type="link" to="/TrackingCreativity/"><button className='trackButton'>POCO MOTIVADA</button></Link>
     <img className='imageDown' src={trackMoti}></img>
    </div>
  )
}

export default tracking

