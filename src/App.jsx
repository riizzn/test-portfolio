import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import About from "./sections/About";
import Works from "./sections/Works";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import ReactLenis from "lenis/react";
import { useProgress } from "@react-three/drei";
import { ProgressBar } from "primereact/progressbar";

const App = () => {
  const { progress } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      // Delay slightly so user sees 100%
      setTimeout(() => setIsReady(true), 500);
    }
  }, [progress]);

  return (
    <ReactLenis root className="relative min-h-screen w-screen overflow-x-hidden">
      {/* Loading Screen */}
      {!isReady && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[9999] transition-opacity">
          <h2 className="mb-4 text-lg font-medium">Loading...</h2>
          <ProgressBar
            value={progress}
            showValue
            className="w-[60%] max-w-[400px]"
          />
          <p className="mt-2 text-sm">{Math.round(progress)}%</p>
        </div>
      )}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Navbar />
        <Hero />
        <ServiceSummary />
        <Services />
        <About />
        <Works />
        <ContactSummary />
        <Contact />
      </div>
    </ReactLenis>
  );
};

export default App;
