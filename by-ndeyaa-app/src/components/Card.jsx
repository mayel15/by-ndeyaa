import React from "react";
import Button from "./Button";
export default function Card(props) {
    return (
        <div className="tab-card col-lg-4 col-md-2">
            <img className="img-fluid" src={props.img} alt="img-tab" />
            <div className="card-info">
                <p>{props.title}</p>
                <div>
                    <p>{props.price}</p>
                    <Button text="Commander" />
                </div>
            </div>


        </div>
    )
}