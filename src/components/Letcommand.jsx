import React from "react";
import { useState } from "react";
import tabs from "../tabs";

export default function Letcommand() {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        tel: '',
        adresse: '',
        article: ''
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Envoyer les données du formulaire via une méthode POST
        fetch('http://localhost:8000/api/commander', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data.message);
            if(data.message==="mail sent successfully"){
              alert('Votre commande a été bien envoyé.\nNous vous recontacterons pour discuter des modelités de livraison. :)')
              setFormData({
                lastName: '',
                firstName: '',
                email: '',
                tel: '',
                adresse: '',
                article: ''
              })
              console.log('Mail envoyé avec succes');
            }else{
              alert('Un des champs du formualaire est vide. : (\nVeuillez le remplir correctement, merci ! : )')
              console.log("error : champs du formulaire vide :(")
            }
          })
          .catch(error => {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
          });
      };

      

    return (
        <section className="common-section" id="let-command" style={{ padding: "" }}>
            <div className="title-section">
                <h1>Let's go commander !</h1>
                <img className="img-illustration" src="images/icons/bon-de-commande.png" alt="img-icon" />
            </div>
            <form className="command-form" onSubmit={handleSubmit} style={{ margin: "0 10%", display:"grid", justifyContent: "" }}>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="lastName" value={formData.lastName} id="floatingInput" placeholder="Sene" onChange={handleChange}/>
                    <label for="floatingInput">Nom</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="firstName" value={formData.firstName} id="floatingInput" placeholder="Abdou" onChange={handleChange}/>
                    <label for="floatingInput">Prénom</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" name="email" value={formData.email} id="floatingInput" placeholder="Input" onChange={handleChange}/>
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="tel" class="form-control" name="tel" value={formData.tel} id="floatingInput" placeholder="Input" onChange={handleChange}/>
                    <label for="floatingInput">Téléphone</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="adresse" value={formData.adresse} id="floatingInput" placeholder="Input" onChange={handleChange}/>
                    <label for="floatingInput">Adresse de livraison</label>
                </div>
                <select class="form-select form-select-lg mb-3" name="articleSelected" aria-label=".form-select-lg example" onChange={handleChange}>
                    <option selected>Article de commande</option>
                    {tabs.map((t, index) => {
                        return (<option value={t.title}>{t.title}</option>)
                    })}
                </select>
                <button 
                type="submit" class="btn" 
                style={{
                    margin: "auto",
                    borderRadius: "20% 0 ",
                    padding: "10px",
                    backgroundColor: "#A9907E"                 
                }}
                
                > Commander </button>
            </form>
        </section>
    )
}