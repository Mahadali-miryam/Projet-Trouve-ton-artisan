import React from 'react';
import '../style/404.scss';

const NotFoundPage = () => {
  return (
    <div class="not-found-container">
    <img src="404-Page.jpg" alt="Page not found" class="not-found-image"/>
      <p>Oops erreur! La page que vous cherchez n'existe pas.</p>
    </div>
  );
};

export default NotFoundPage;