import React, { useState } from 'react';
import '../style/contact.scss';


const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      subject: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };


  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3002/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message envoyé avec succès !');
        // Réinitialise le formulaire
        setFormData({ name: '', subject: '', message: '' });
      } else {
        alert('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message :', error);
      alert('Erreur lors de l\'envoi du message.');
    }
  };

  return (
    <div class="contact-form">
    <h1>Contactez-moi</h1> 
    <form className="form"onSubmit={handleContactSubmit}>
      <div>
        <label htmlFor="name">Nom :</label>
        <input type="text" id="name" name="name" required onChange={handleChange} value={formData.name} />
      </div>
      <div>
        <label htmlFor="subject">Objet :</label>
        <input type="text" id="subject" name="subject" required onChange={handleChange} value={formData.subject} />
      </div>
      <div>
        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" required onChange={handleChange} value={formData.message}></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
    </div>
  );
};

export default Contact;