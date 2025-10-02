import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import ServiceSummary2 from "./sections/ServiceSummary2";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";

const App = () => {
  return (
    <ReactLenis root className="relative min-h-screen w-screen overflow-x-auto">
      <Navbar />
      <Hero/>
      <ServiceSummary/>
      <Services/>
      <section className=" min-h-screen"></section>

    </ReactLenis>
  );
};

export default App;
