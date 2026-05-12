import React, { useEffect } from "react";
import "./App.css";
import Home from "../features/landing-page/pages/Home";
import Nav from "../features/landing-page/components/Nav";
import ReelsMarqueContainer from "../features/landing-page/components/ReelsMarqueContainer";
import Lenis from "lenis";
import About from "../features/landing-page/pages/About";
import Faq from "../features/landing-page/pages/Faq";
import Services from "../features/landing-page/pages/Services";
import Testimonial from "../features/landing-page/pages/Testimonial";
import Team from "../features/landing-page/pages/Team";
import GrowWithUs from "../features/landing-page/components/GrowWithUs";
import Contact from "../features/landing-page/pages/Contact";
import Footer from "../features/landing-page/components/Footer";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);
  return (
    <>
      <Nav />
      <main className="w-full max-w-[1280px] mx-auto">
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
      </main>
    </>
  );
};

export default App;
