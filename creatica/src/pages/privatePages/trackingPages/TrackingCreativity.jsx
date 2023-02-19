import React from 'react'
import { HeaderUser } from '../../../components/HeaderUser'
import trackCreativa from '../../../assets/trackCreativa.png'

function tracking() {
  return (
    <div>
{/*     <HeaderUser/> */}
     <h3 className='sectionTitle'>TRAQUEA TUS HABITOS</h3>
     <button className='trackButton'>CREATIVA</button>
     <button className='trackButton'>FALTA DE IDEAS</button>
     <img className='imageDown' src={trackCreativa}></img>
    </div>
  )
}

export default tracking