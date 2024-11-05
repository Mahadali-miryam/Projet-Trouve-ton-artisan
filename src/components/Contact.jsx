import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/contact.scss';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
  )

      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };
  
  return (
    <div className="contact-form">
      <h1>Contactez-moi</h1>
      <form ref={form} className="form" onSubmit={sendEmail}>
        <div>
          <label htmlFor="lastName">Nom :</label>
          <input type="text" id="lastName" name="user_name" required />
        </div>
        <div>
          <label htmlFor="firstName">Prénom :</label>
          <input type="text" id="firstName" name="first_name" required />
        </div>
        <div>
          <label htmlFor="yourMail">Email :</label>
          <input type="email" id="yourMail" name="user_email" required />
        </div>
        <div>
          <label htmlFor="yourMessages">Message :</label>
          <textarea id="yourMessages" name="message" required />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;