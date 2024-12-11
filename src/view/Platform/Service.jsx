// Service.jsx
import React from "react";
import Header from "../../Components/Platform/headers/Header";
import HeroSection from "../../Components/Platform/Service/HeroSection";
import SolutionsSection from "../../Components/Platform/Service/SolutionsSection";
import WhyChooseUs from "../../Components/Platform/Service/WhyChooseUs";
import ServicesSection from "../../Components/Platform/Service/ServicesSection";
import PricingSection from "../../Components/Platform/Service/PricingSection";
import ImageSection from "../../Components/Platform/Service/ImageSection";
import TestimonialSection from "../../Components/Platform/Service/TestimonialSection";
import QuestionSection from "../../Components/Platform/Service/QestionSection";
import BlogSection from "../../Components/Platform/Service/BlogSection";
import MessageSection from "../../Components/Platform/Service/MessageSection";
import Footer from "../../Components/Platform/footers/Footer";
function Service() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SolutionsSection />
      <WhyChooseUs />
      <ServicesSection />
      <PricingSection />
      <ImageSection />
      <TestimonialSection />
      <QuestionSection />
      <BlogSection />
      <MessageSection />
      <Footer />
    </div>
  );
}

export default Service;
