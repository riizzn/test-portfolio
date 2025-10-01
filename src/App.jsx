import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-auto">
      <Navbar />
      <Hero/>
      <ServiceSummary/>
      <section className=" min-h-screen"></section>

    </div>
  );
};

export default App;
