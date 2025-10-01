import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import ServiceSummary2 from "./sections/ServiceSummary2";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-auto">
      <Navbar />
      <Hero/>
      <ServiceSummary2/>
      <section className=" min-h-screen"></section>

    </div>
  );
};

export default App;
