import React from 'react';
import ExpandableSection from '../components/ExpandableSection';
import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import { Footer } from '../components/Footer';
import "../Styles/About.css"



export const About = () => {
  return (
    <>
    <div className='container'>
      <Header />
      <Banner image="about" />
      <div className='container-ExpandableSection'>
      <ExpandableSection title="Fiabilité">
        <p>{"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."}</p>
      </ExpandableSection>
      <ExpandableSection title="Respect">
      <p>{"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}</p>
      </ExpandableSection>
      <ExpandableSection title="Service">
      <p>{"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}</p>
      </ExpandableSection>
      <ExpandableSection title="Sécurité">
      <p>{"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}</p>
      </ExpandableSection>
      </div>
      </div>
      <Footer />
    </>
  );
};
