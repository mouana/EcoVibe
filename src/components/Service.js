import React from "react";
import HeroSection from "../components/HeroSection"; // Import HeroSection
import SolutionsSection from '../components/SolutionsSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import ImageSection from   '../components/ImageSection';
import TestimonialSection from '../components/TestimonialSection';
import QuestionSection from '../components/QestionSection';
import BlogSection from '../components/BlogSection';
import MessageSection from '../components/MessageSection';

function Service() {
  return (
    <div>
      {/* HeroSection component */}
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


      
    </div>
  );
}

export default Service;
