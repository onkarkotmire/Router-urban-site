import React from "react";
import Aboutus from  './images/Aboutus.png'

const About = () => {
  return (
    <div style={{width:"100vw", height:"75vh", marginTop:"20vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div style={{ width:"80%", height:"100%"}}>
    <img src={Aboutus} alt="" style={{width:"100%", height:"100%"}} />
    </div>
    </div>
  );
};

export default About;