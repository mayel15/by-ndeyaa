import React from "react";
import { useState } from "react";
import tabs from "./tabs";
import axios from 'axios';

export default function Letcommand() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Envoyer les données du formulaire via une méthode POST
        fetch('http://localhost:8000/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            console.log('E-mail envoyé avec succès !');
          })
          .catch(error => {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
          });
      };

      /*await fetch('http://localhost:8000/commander', { method: 'POST' }).then((response) => response.json())
        .then((promise) => {
            //dishes = promise
            console.log(promise)
            alert("commande bien envoyé");
        })*/

    return (
        <section className="common-section" id="let-command" style={{ padding: "" }}>
            <div className="title-section">
                <h1>Let's go commander !</h1>
                <img className="img-illustration" src="images/icons/bon-de-commande.png" alt="img-icon" />
            </div>
            <form className="command-form" onSubmit={handleSubmit} style={{ margin: "0 10%", display:"grid", justifyContent: "" }}>
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
                type="submit" class="btn btn-outline-success" 
                style={{
                    margin: "4% 43%"
                }}
                
                > Commander </button>
            </form>
        </section>
    )
}