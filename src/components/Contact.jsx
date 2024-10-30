import React from 'react';
import emailjs from '@emailjs/browser';
import '../style/contact.scss';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;


const Contact = () => {

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
        
          alert('Message envoyé avec succès !');
        }, (error) => {
          alert('Erreur lors de l’envoi du message.');
        });
      e.target.reset(); // Réinitialise le formulaire après l'envoi
    };

  return (
    <div className="contact-form">
    <h1>Contactez-moi</h1>
    <form className="form" onSubmit={sendEmail}>
      <div>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="subject">Objet :</label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div>
        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
    </div>
  );
};

export default Contact;