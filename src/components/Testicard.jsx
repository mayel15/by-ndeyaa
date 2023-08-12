import React from "react";
import './styles.css';
export default function Testicard(props){
    return (
        <div className="testi-card">
            <img className="img-user" style={{height: "8rem", width: "8rem", borderRadius: "30%"}}src={props.img}  alt="img-user"/>
            {/*<img className="img-com" style={{height: "8rem", width: "8rem"}} src="images/icons/la-communication.png" alt="la-communication"/>*/}
            <p>{props.text}</p>
        </div>
    )
}