import React from "react";
import './styles.css';

export default function Welcome(){
    return(
        <section id="welcome" >
            <img class="img-welcome img-fluid" src="images/tabs/welcome.jpeg" alt="img-welcome" />
            <div class="word-welcome">
                <h1>Bienvenue chez Ndeyaa !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
            </div>
        </section>
    )
}