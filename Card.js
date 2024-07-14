import React from "react";
import img1 from "../images/image 12.png";
import star from "../images/Star 1.png";
function Card()
{
    return(
        <div className="card">
            <img src={img1} alt="" className="card-photo"/>
            <div className="under-card">
            <p><img src={star} alt="star" className="star"/>
            <span className="ratings">5</span>
            <span className="reviews">(6)</span>
            </p>
            <p></p>
            <p></p></div>

        </div>
    );
}
export default Card;