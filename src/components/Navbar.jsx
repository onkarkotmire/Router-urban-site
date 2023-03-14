import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <>

//       <ul>
//         <NavLink className="nav-bar-link" to="/home">
//           <li>Home</li>
//         </NavLink>
//         <NavLink className="nav-bar-link" to="/contact">
//           <li>Contact</li>
//         </NavLink>
//         <NavLink className="nav-bar-link" to="/about">
//           <li>About Us</li>
//         </NavLink>  
//       </ul>
//     </>
//   );
// };

// export default Navbar;




export default function Navbar() {
    return (

        <div className='Nav-box-main'>
            <div className="nav-box-1">
                <div className='contact-box'>
                    <div className="mobileno">
                        <i class="fa-solid fa-phone-flip"></i>
                        <p>0509418224</p>
                    </div>
                    <div className="email">
                        <i class="fa-solid fa-envelope"></i>
                        <p>enquiry@urbansciencemep.com</p>
                    </div>
                </div>
            </div>
            <div className='Nav-box-2'>
                <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="error" className='icon-image' />
                <div className='item-list'>
                    <ul className='ul'>
                        <NavLink className="nav-bar-link" to="/home">
                            <li>Home</li>
                        </NavLink>
                        <NavLink className="nav-bar-link" to="/about">
                            <li>AboutUs</li>
                        </NavLink>
                        <NavLink className="nav-bar-link" to="/services">
                            <li>Services</li>
                        </NavLink>
                        <NavLink className="nav-bar-link" to="/projects">
                            <li>Projects</li>
                        </NavLink>
                        <NavLink className="nav-bar-link" to="/contact">
                            <li>Contacts</li>
                        </NavLink>


                    </ul>

                </div>
                <button>Enquire Now</button>
            </div>
        </div>
    )
}
