import React from "react";
import './figma.css';
import img1 from "../images/Group 77.png"
import pass1 from "../images/Join unique interactive activities led by one-of-a-kind hosts—all without leaving home..png";

function Middle()
{
    return(
        <div className="middle">
            <img className="collabs"src={img1} alt="collabs"/>
            <p>Online Experiences</p>
            <img className="underpass" src={pass1} alt="kuchbhi"/>
        </div>
    );
}
export default Middle