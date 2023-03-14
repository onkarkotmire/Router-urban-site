import React from 'react'
import services from './images/services.png'

export default function Services() {
  return (
    <div>
      <div style={{width:"100vw",  height:"75vh", marginTop:"20vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div style={{width:"80%", height:"100%"}}>
    <img src={services} alt="" style={{width:"100%", height:"100%"}} />
    </div>
    </div>
    </div>
  )
}
