import React from "react";
import './styles.css';
import testimonials from "./testimonials"
import Testicard from "./Testicard";
export default function Testimonial(){
    return(
        <section id="testimonials" className="common-section">
            <div className="title-section">
                <h1>Témoignages</h1>
                <img class="img-illustration" src="images/icons/testimonials.png" alt="img-testimonials"/>
            </div>
            <div>
            {testimonials.map((n, index) => {
            return (
                <Testicard 
                    key={index} 
                    id={index} 
                    img={n.img}
                    text={n.text}
                />
            )})}
            </div>
        </section>
    )
}