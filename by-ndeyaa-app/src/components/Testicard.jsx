import React from "react";
export default function(props){
    return (
        <div className="testi-card">
            <img src={props.img}  alt="img-user"/>
            <img src="images/icons/la-communication.png" alt="la-communication"/>
            <p>{props.text}</p>
        </div>
    )
}