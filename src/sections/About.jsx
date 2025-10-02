import React, { useRef } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import AnimatedText from "../components/AnimatedText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const smallText = "crazy unique designs";
  const bigText = "About";
  const aboutText = `from prototype 
    to product
    in days
    `;
  const text = `I move through code the way others move through shadows—quietly, with purpose.  
Every app I build is fast, intuitive, and built to last. No wasted lines, no reckless decisions. Just clarity, precision, and control.  

I don’t chase trends. I craft systems that stand on their own—clean architectures, elegant UI, and logic that never flinches.  

When I’m not building, I’m sharpening the edges:
🧠 Breaking apart ideas just to rebuild them stronger  
📡 Sharing tactics with devs who want more than mediocrity  
🧗 Testing my focus on the wall—because real balance starts off-screen  
🎶 Finding rhythm in the quiet between commits`;

  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
      duration:1,
      ease:'power4.out',
      scrollTrigger:{trigger:imgRef.current}
    });
  });

  return (
    <section id="about" className="py-10  min-h-screen bg-pearl text-charcoal rounded-b-2xl">
      <AnimatedHeader
        smalltext={smallText}
        bigText={bigText}
        aboutText={aboutText}
        withScrollTrigger={true}
      />
      <div className="mt-10 px-10 flex flex-col md:flex-row items-center justify-between font-light text-lg lg:text-xl text-charcoal/70 gap-15 ">
        <img
          ref={imgRef}
          src="/assets/adawong.jpg"
          className=" w-[350px] md:w-[400px] rounded-2xl"
        />
        <AnimatedText
          text={text}
          className="leading-relaxed text-pretty w-full "
        />
      </div>
    </section>
  );
};

export default About;
