import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DecServ from './components/DecouvServ';
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
import MainPage from './components/MainPage';
import '../src/css/test.css';
import NosExperts from './components/NosExperts';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/Service" element={<Service/>} /> 
        <Route path="/MainPage" element={<MainPage/>} /> 
        <Route path="/NosExperts" element={<NosExperts/>} /> 
        <Route path="/DecServ" element={<DecServ/>} /> 
        <Route path="/SolutionsSection" element={<SolutionsSection/>} /> 
        <Route path="/WhyChooseUs" element={<WhyChooseUs/>} /> 
        <Route path="/ServicesSection" element={<ServicesSection/>} /> 
        <Route path="/PricingSection" element={<PricingSection/>} /> 
        <Route path="/ImageSection" element={<ImageSection/>} /> 
        <Route path="/TestimonialSection" element={<TestimonialSection/>} /> 
        <Route path="/QuestionSection" element={<QuestionSection/>} /> 
        <Route path="/BlogSection" element={<BlogSection/>} /> 
        <Route path="/MessageSection" element={<MessageSection/>} /> 
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
