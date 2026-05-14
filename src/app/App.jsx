import React, { useEffect } from "react";
import "./App.css";
import Lenis from "lenis";
import LandingPage from "../features/landing-page/pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Privacy from "../features/landing-page/pages/Privacy";
import Refund from "../features/landing-page/pages/Refund";
import Terms from "../features/landing-page/pages/Terms";
import CoursePage from "../features/course/pages/CoursePage";
import CourseProject from "../features/course/pages/CourseProject";
import NotFound from "../shared/pages/NotFound";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <main className="w-full max-w-[1280px] mx-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/bootcamp" element={<CoursePage />} />
          <Route path="/project/:slug" element={<CourseProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
