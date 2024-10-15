import React from 'react';
import {Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage'; 
import Home from './components/Home';
import Batiment from './components/Batiment.js';
import Fabrication from './components/Fabrication';
import Alimentation from './components/Alimentation';
import Services from './components/Services';
import ArtisanDetail from './components/ArtisanDetail';
import ArtisansList from './components/ArtisansList';
import Contact from './components/Contact';

const App=() => {
  return (

    <div>
      <Header />
    
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Batiment" element={<Batiment />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Fabrication" element={<Fabrication />} />
        <Route path="/Alimentation" element={<Alimentation/>} />
        <Route path="/artisans/:artisanId" element={<ArtisanDetail/>} />
        <Route path="/contact/:email" element={<Contact />} />
        <Route path="/search" element={<ArtisansList/>} /> 
        <Route path="*" element={<NotFoundPage />} />

      </Routes> 
      <Footer />
    </div>
  );
}


export default App;
