import React, { useEffect } from "react";
import "./App.css";
import Home from "../features/landing-page/pages/Home";
import Nav from "../features/landing-page/components/Nav";
import ReelsMarqueContainer from "../features/landing-page/components/ReelsMarqueContainer";
import Lenis from "lenis";
import About from "../features/landing-page/pages/About";

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
      <main className="w-full overflow-hidden max-w-[1200px] mx-auto">
        <Home />
        <ReelsMarqueContainer />
        <About />
      </main>
    </>
  );
};

export default App;
