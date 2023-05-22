const expresss = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

var firstName = req.body.firstName;
var lastName = req.body.lastName;/**/
var tel = req.body.tel;
var adresse = req.body.adresse; 
var article = req.body.article;

var client = `Nom : ${firstName} \n Prenom : ${lastName} \n Tel : ${tel} Prenom : ${adresse}`;
var article = `Article : ${article}`;

var message = "Nouvele commande\n\n" + client + article;
export default function commander(){
    let transporter = nodemailer.createTransport({  
        host: 'smtp.gmail.com',
        port: 587, // 587 -> TLS & 465 -> SSL
        auth: {  
          user: 'mayelthiam81@gmail.com', // email de votre votre compte google
          pass: 'yzwfjryqrnqwknfg' // password de votre compte google
        }  
    });

    let mail = {  
        from: 'mayelthiam81@gmail.com',  
        to: 'papemayel1515@gmail.com',  
        subject: 'Nouvelle commande !',  
        text: message
        // on peut remplacer l'attribut `text`par `html`si on veut que le cors de notre email supporte le HTML
        // html:  '<h1>This email use html</h1>'
      };

    transporter.sendMail(mail, (error, info) => {  
        if (error) {  
            console.log(error);  
        } else {  
            console.log('Email: ' + info.response);  
        }  
    });
    //alert('Votre commande a été bien passé\n.On vous contactera bientôt pour les modalités de livraison! :)')
}

commander();