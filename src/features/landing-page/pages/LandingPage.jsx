import React from "react";
import ReelsMarqueContainer from "../components/ReelsMarqueContainer";
import About from "./About";
import Services from "./Services";
import GrowWithUs from "../components/GrowWithUs";
import Testimonial from "./Testimonial";
import Team from "./Team";
import Faq from "./Faq";
import Footer from "../components/Footer";
import Home from "./Home";
import Contact from "./Contact";
import Nav from "../components/Nav";

const LandingPage = () => {
  return (
    <>
    <Nav />
      <Home />
      <ReelsMarqueContainer />
      <About />
      <Services />
      <GrowWithUs />
      <Testimonial />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
