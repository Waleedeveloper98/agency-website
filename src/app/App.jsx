import React, { useEffect } from "react";
import "./App.css";
import Lenis from "lenis";
import LandingPage from "../features/landing-page/pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Privacy from "../features/landing-page/pages/Privacy";
import Refund from "../features/landing-page/pages/Refund";
import Terms from "../features/landing-page/pages/Terms";

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
      <main className="w-full max-w-[1280px] mx-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
