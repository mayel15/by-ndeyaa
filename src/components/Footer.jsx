import React from "react";
import './styles.css';
export default function Footer() {
    var textMessage = "Si vous avez des questions, une signalisation ou quelque chose d’autre  "
    var date = new Date();
    var year = date.getFullYear();
    return (
        <section className="footer common-section">
            <div className="row">
                <div className="col-lg-4" style={{display: "grid"}}>
                    <a href="#navbar">Accueil</a>
                    <a href="#tabs">Nos tableaux</a>
                    <a href="#about-us">A propos</a>
                </div>
                <div className="col-lg-4" >
                    <h4>Nos reseaux sociaux</h4>
                    <div><i class="fa-brands fa-instagram"></i><a href="#welcome"> by-ndeyaa</a></div>
                    <div><i class="fa-brands fa-facebook"></i><a href="#welcome"> by-ndeyaa</a></div>
                    <a className="navbar-brand" href="#Accueil">By-Ndeyaa</a> 
                </div>
                <div className="col-lg-4">
                <h4>Nous contacter</h4>
                <p>{textMessage}</p>
                <div><i class="fa-solid fa-envelope"></i><a href="#contact-us"> Nous contacter</a></div>
                <p style={{marginTop: "1.25rem"}}>© {year} by-ndeyaa | Tous droits réservés </p>
                </div>
            </div>
        </section>
    )
}