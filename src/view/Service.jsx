// Service.jsx
import React from 'react';
import Header from '../Components/headers/Header';
import HeroSection from '../Components/Service/HeroSection';
import SolutionsSection from '../Components/Service/SolutionsSection';
import WhyChooseUs from '../Components/Service/WhyChooseUs';
import ServicesSection from '../Components/Service/ServicesSection';
import PricingSection from '../Components/Service/PricingSection';
import ImageSection from '../Components/Service/ImageSection';
import TestimonialSection from '../Components/Service/TestimonialSection';
import QuestionSection from '../Components/Service/QestionSection';
import BlogSection from '../Components/Service/BlogSection';
import MessageSection from '../Components/Service/MessageSection';
import Footer from '../Components/footers/Footer';
function Service() {
  return (
    <div>
      
      <Header />
      <HeroSection />
      <SolutionsSection/>
      <WhyChooseUs/>
      <ServicesSection/>
      <PricingSection/>
      <ImageSection/>
      <TestimonialSection/>
      <QuestionSection/>
      <BlogSection/>
      <MessageSection/>
      <Footer/>
    
    </div>
  );
}

export default Service;
