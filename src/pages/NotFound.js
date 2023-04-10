// src/pages/NotFound.js
import React from 'react';
import { Header } from "../components/Header" 
import { Link } from 'react-router-dom';
import { Footer } from "../components/Footer"


const NotFound = () => {
  return (
    <div>
      <Header />
      <h1>Erreur 404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
      <Footer/>
    </div>
  );
};

export default NotFound;
