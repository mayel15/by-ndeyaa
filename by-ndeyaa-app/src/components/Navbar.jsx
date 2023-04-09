import React from "react";
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid nav-container">
                <a className="navbar-brand" href="#Accueil">
                    By-Ndeyaa
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#welcome">Accueil</a>
                        <a className="nav-link" href="#tabs">Nos tableaux</a>
                        <a className="nav-link" href="#about-us">A propos</a>
                        <a className="nav-link" href="#contact">Nous contacter</a>
                    </div>
                </div>
            </div>
        </nav>
    );

} 