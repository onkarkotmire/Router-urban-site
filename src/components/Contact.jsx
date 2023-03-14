import React from "react";
import contactus from  './images/contactus.png'

const Contact = () => {
  return (
    <div>
      <div style={{width:"100vw",  height:"75vh", marginTop:"20vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <div style={{ width:"80%", height:"100%"}}>
    <img src={contactus} alt="" style={{width:"50%", height:"100%"}} />
    </div>
    </div>
    </div>
  );
};

export default Contact;