import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import Home from './components/Home';
import HeroSection from './components/HeroSection';
import './App.css'; // Your custom styles (optional)
import Service from './components/Service';
import SolutionsSection from './components/SolutionsSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import ImageSection from   './components/ImageSection';
import TestimonialSection from './components/TestimonialSection';
import QuestionSection from './components/QestionSection';
import BlogSection from './components/BlogSection';
import MessageSection from './components/MessageSection';
import MainPage from '../src/composents/MainPage';
import '../src/css/test.css';
import NosExperts from '../src/composents/NosExperts';

 

function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Use element instead of component */}
        <Route path="/Service" element={<Service/>} /> {/* Use element instead of component */}
        <div className="App">
         <MainPage />
         <NosExperts/>
        </div>
      </Routes>
    </Router>
  );
}

export default App;
