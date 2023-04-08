import React from "react";
import Card from "./Card";
import tabs from "./tabs";

export default function Tab(){
   // const [tabs, setNotes] = useState([]);
    return(
        <section id="tabs" className="common-section"> 
            <div className="title-section">
                <h1>Nos tableaux</h1>
                <img className="img-illustration" src="images/icons/art.png" alt="img-icon"/>
            </div>
            <div className="row ">
            {tabs.map((n, index) => {
            return (
                <Card 
                    key={index} 
                    id={index}
                    title={n.title} 
                    img={n.img}
                    price={n.price}
                />
            )
            })}
            </div>
        </section>
        
        
    );
}