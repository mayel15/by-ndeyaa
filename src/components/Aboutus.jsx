import React from "react";
import './styles.css';
export default function Aboutus() {
    var text1 = "Chez By_Ndeyaa, nous adorons faire des trouvailles uniques et magnifiques. Nous mettons tout en œuvre pour vous proposer des tableaux avec le meilleur rapport qualité prix, de sorte que vous puissiez toujours trouver votre bonheur. By_Ndeyaa, la référence pour les articles d'intérieur. "
    var text2 = "Notre petite entreprise est le paradis de la décoration et des accessoires d'intérieur. Nos clients savent qu'ils peuvent compter sur nous pour leur proposer des tableaux inattendus, décalés avec une touche de personnalité afin d'ajouter du piquant à votre maison. Parcourez notre site et découvrez tout ce que nous avons à offrir."
    return (
        <section id="about-us" className="common-section">
            <div className="title-section">
                <h1>Qui sommes nous ?</h1>
                <img className="img-illustration" src="images/icons/group.png" alt="img-icon" />
            </div>
            <div className="paragraphs">
                <div className="p1">
                    <p>{text1}</p>                
                </div>
                <div className="p2">
                    <p>{text2}</p>
                </div>
            </div>
        </section>
    )
}