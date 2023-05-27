import React from "react";
export default function Contact(){
    return(
        <section id="contact-us" className="common-section">
            <div className="title-section">
                <h1>Nous contacter ?</h1>
            </div>
            <div className="contacts-infos"> 
                <div className="infos ">
                    <h2><i class="fa-solid fa-mobile-screen-button"></i>  +221 78 540 36 70</h2>
                    <h2><i class="fa-solid fa-envelope"></i>  niassndeyefatou649@gmail.com</h2>
                    <h2><i class="fa-sharp fa-solid fa-location-dot"></i>  Zone de Captage, Dakar, Sénégal</h2>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.3565918114678!2d-17.444116461185825!3d14.728800996443209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172d2b94a61cb%3A0x3e408f9ca3feb9ee!2zWm9uZSBkZSBjYXB0YWdlLCBEYWthciwgU8OpbsOpZ2Fs!5e0!3m2!1sfr!2sfr!4v1684763117814!5m2!1sfr!2sfr" title="localisation" width="600" height="450" style={{ border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}