import React from "react";
import './figma.css';
import l1 from '../images/images.png';
function Navbar()
{
    return(
        <nav className="Navbar">
            <img src={l1} alt="logo" className="logo-img"/>
        </nav>
    );
}
export default Navbar;