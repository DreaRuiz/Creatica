import React from 'react'
import { HeaderUser } from '../../../components/HeaderUser'
import trackFoco from '../../../assets/trackFoco.png'

function tracking() {
  return (
    <div>
{/*     <HeaderUser/> */}
     <h3 className='sectionTitle'>TRAQUEA TUS HABITOS</h3>
     <button className='trackButton'>CONCENTRADA</button>
     <button className='trackButton'>DISPERSA</button>
     <img className='imageFocus' src={trackFoco}></img>
    </div>
  )
}

export default tracking