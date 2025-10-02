import React, { useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeader = ({smalltext, bigText,aboutText, withScrollTrigger=false}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);



  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: withScrollTrigger ? {trigger:contextRef.current} : undefined
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);
  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-10 pt-16 sm:gap-16  "
        >
          <p className="text-xs font-light tracking-wide uppercase px-10">
            {smalltext}
          </p>
          <div className="px-10">
            <h2
              style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.2)" }}
              className="flex flex-col flex-wrap  uppercase  banner-text-responsive gap-12 sm:gap-16 md:block"
            >
              {bigText}
            </h2>
          </div>
        </div>
      </div>
      <div className="relative px-10 ">
        <div className="absolute inset-x-0 border-t-2" />
        <div
          className="py-12 sm:py-16 text-end "
          style={{ textShadow: "1px 1px 10px rgba(0,0,0,0.2)" }}
        >
          <AnimatedText
            text={aboutText}
            className="uppercase font-light value-text-responsive "
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeader;
