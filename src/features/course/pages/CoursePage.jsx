import React from "react";
import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import HeroSection from "../components/HeroSection";
import "../style/style.css";
import HardTruthSection from "../components/HardTruthSection";
import ComparisonSection from "../components/ComparisonSection";
import OpportunitySection from "../components/OpportunitySection";
import MasterySection from "../components/MasterySection";
import TransformationSection from "../components/TransformationSection";
import ResultsSection from "../components/ResultsSection";
import CourseStructure from "../components/CourseStructure";
import PortfolioSection from "../components/PortfolioSection";
import BonusesSection from "../components/BonusesSection";
import AudienceSection from "../components/AudienceSection";
import GuaranteeSection from "../components/GuaranteeSection";
import FAQSection from "../components/FAQSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import StickyMobileCTA from "../components/StickyMobileCTA";
import PricingSection from "../components/PricingSection";

const CoursePage = () => {
  return (
    <main className="secondary-font antialiased selection:bg-accent selection:text-black">
      <Navbar />
      <ScrollProgress />
      <section className="overflow-x-hidden text-balance">
        <HeroSection />
        <HardTruthSection />
        <ComparisonSection />
        <OpportunitySection />
        <MasterySection />
        <TransformationSection />
        <ResultsSection />
        <CourseStructure />
        <PortfolioSection />
        <BonusesSection />
        <AudienceSection />
        <PricingSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </section>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </main>
  );
};

export default CoursePage;
