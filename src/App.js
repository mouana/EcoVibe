import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Reviews from './components/Reviews';
import EnergySection from './components/Section3';
import Services from './components/Services';
import ContactSection from './components/Contact';
import Simulateur from "./components/Simulateur";
import Signup from './components/Signup';
import VoirPlus from './/components/VoirPlus';
import Footer from './components/Footer';
import Inscription from './components/Inscription';
import ContactUsPage from './components/ContactUsPage';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Services />
            <EnergySection />
            <Reviews />
            <ContactSection />
          </>
        } />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/simulateur" element={<Simulateur />} />
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/contact" element={<ContactUsPage />} />

        <Route path="/voir-plus" element={<VoirPlus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
