import React from "react";
import './styles.css';
export default function Button(props){
    return(
        <div className="button-wrap">
            <div className="text-button"><a href="#let-command">{props.text}</a></div>
        </div>
    )
}