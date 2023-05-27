import React from "react";
import './styles.css';

export default function Welcome(){
    var welcomeText = "By_Ndeyaa est une petite entreprise qui vous propose des tableaux pour votre intérieur . Ces tableaux apportent une petite touche de rappel islamique sur votre décoration."
    return(
        <section id="welcome" >
            <img class="img-welcome img-fluid" src="images/tabs/welcome.jpeg" alt="img-welcome" />
            <div class="word-welcome">
                <h1>Bienvenue chez Ndeyaa !</h1>
                <p>{welcomeText}</p>
            </div>
        </section>
    )
}