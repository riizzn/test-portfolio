import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  const linesRef = useRef([]);

  useGSAP(() => {
    linesRef.current.forEach((line, i) => {
      const words = line.children;
      const direction = i % 2 === 0 ? 1 : -1;
      gsap.from(
        words,
        {
          x: (index) => (index - (words.length - 1) / 2) * 100 * direction,
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
          },
          ease: "power1.out",
        }
      );
    });
  }, []);

  return (
    <section className="mt-20 overflow-hidden  text-4xl md:text-[70px] p-8  ">
      <div className="w-full ">
        <div className="flex text-sm justify-between font-light pb-10   ">
          <span className="border border-white px-1.5 p-1 rounded-2xl">
            Our mission
          </span>
          <span className="border border-white px-1.5 p-1 rounded-2xl">
            Our mission
          </span>
        </div>
        <div
          ref={(el) => (linesRef.current[0] = el)}
          className="flex justify-between"
        >
          <span>I</span>
          <span>craft</span>
          <span>refined</span>
        </div>
        <div ref={(el) => (linesRef.current[1] = el)} className="flex gap-50 ">
          <span>web </span>
          <span>experiences</span> 
        </div>
        <div
          ref={(el) => (linesRef.current[2] = el)}
          className="flex justify-between"
        >
          <span>that</span>
          <span>combine</span>
          <span>style</span>
        </div>
        <div
          ref={(el) => (linesRef.current[3] = el)}
          className="flex justify-between"
        >
          <span>and</span>
          <span>lasting</span>
          <span>impact</span>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
