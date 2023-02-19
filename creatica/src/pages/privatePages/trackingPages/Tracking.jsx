import React from 'react'
import { HeaderUser } from '../../../components/HeaderUser'
import trackMoti from '../../../assets/trackMoti.png'

function tracking() {
  return (
    <div>
{/*     <HeaderUser/> */}
     <h3 className='sectionTitle'>TRAQUEA TUS HABITOS</h3>
     <button className='trackButton'>MOTIVADA</button>
     <button className='trackButton'>POCO MOTIVADA</button>
     <img className='imageDown' src={trackMoti}></img>
    </div>
  )
}

export default tracking