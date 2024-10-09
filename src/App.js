import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage'; 


const App=() => {
  return (
    <div>
       <Header />
    
       <Routes>  
       <Route path="*" element={<NotFoundPage />} />
      </Routes> 
      <Footer />
    </div>
  );
}


export default App;
