import React from "react";
import tabs from "./tabs";

export default function Letcommand() {
    return (
        <section className="common-section" id="let-command" style={{ padding: "" }}>
            <div className="title-section">
                <h1>Let's go commander !</h1>
                <img className="img-illustration" src="images/icons/bon-de-commande.png" alt="img-icon" />
            </div>
            <div className="command-form" style={{ margin: "0 10%", display:"grid", justifyContent: "" }}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="lastName" id="floatingInput" placeholder="Sene" />
                    <label for="floatingInput">Nom</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="firstName" id="floatingInput" placeholder="Abdou" />
                    <label for="floatingInput">Prénom</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" name="email" id="floatingInput" placeholder="Input" />
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="tel" class="form-control" name="tel" id="floatingInput" placeholder="Input" />
                    <label for="floatingInput">Téléphone</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="adresse" id="floatingInput" placeholder="Input" />
                    <label for="floatingInput">Adresse de livraison</label>
                </div>
                <select class="form-select form-select-lg mb-3" name="article" aria-label=".form-select-lg example">
                    <option selected>Article de commande</option>
                    {tabs.map((t, index) => {
                        return (<option value={t.key}>{t.title}</option>)
                    })}
                </select>
                <button 
                type="button" class="btn btn-outline-success" 
                style={{
                    margin: "4% 43%"
                }}
                
                > Commander </button>
            </div>
        </section>
    )
}