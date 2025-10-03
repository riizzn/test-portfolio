import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import ServiceSummary2 from "./sections/ServiceSummary2";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import Works from "./sections/Works";

const App = () => {
  return (
    <ReactLenis root className="relative min-h-screen w-screen overflow-x-auto">
      <Navbar />
      <Hero/>
      <ServiceSummary/>
      <Services/>
      <About/>
      <Works/>
      <section className="min-h-screen"/>
      

    </ReactLenis>
  );
};

export default App;
