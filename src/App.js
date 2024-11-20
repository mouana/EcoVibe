import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Utilisation de Routes
import Header from './components/Header';
import Home from './components/Home';
import DecServ from './components/DecouvServ'; // Assurez-vous que ce composant est importé correctement
import HeroSection from './components/HeroSection';
import './App.css'; // Vos styles personnalisés (facultatif)
import Service from './components/Service';
import SolutionsSection from './components/SolutionsSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import ImageSection from './components/ImageSection';
import TestimonialSection from './components/TestimonialSection';
import QuestionSection from './components/QestionSection';
import BlogSection from './components/BlogSection';
import MessageSection from './components/MessageSection';

function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Utilisation de Routes pour React Router v6 */}
        <Route path="/" element={<Home />} /> {/* Utilisation de 'element' */}
        <Route path="/Service" element={<Service />} /> {/* Utilisation de 'element' */}
        <Route path="/DecouvServ" element={<DecServ />} /> {/* Nouveau chemin pour DecServ */}
      </Routes>
      {/* Ajoutez des sections supplémentaires si nécessaire */}
    </Router>
  );
}

export default App;
