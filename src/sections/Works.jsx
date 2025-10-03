import React, { useRef, useState } from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import { projects } from "../../constants";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const previewRef = useRef(null);
  const smallText = "the fun part :";
  const bigText = "Works";
  const aboutText = `featured projects 
    that have been
    meticulously crafted 
    with passion
    `;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className=" flex flex-col min-h-screen ">
      <AnimatedHeader
        smalltext={smallText}
        bigText={bigText}
        aboutText={aboutText}
      />
      <div className="flex flex-col  relative " onMouseMove={handleMouseMove}>
        {projects.map((work, index) => (
          <div
            key={work.id}
            id="project"
            className="flex flex-col font-light cursor-pointer  gap-1 md:gap-0 relative py-5 group md:hover:bg-pearl "
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="flex justify-between items-center px-10 transition-all duration-500 md:group-hover:px-12 md:group-hover:text-charcoal"
            >
              <h4 className="text-lg md:text-2xl">{work.name}</h4>
              <Icon
                icon="solar:arrow-right-up-outline"
                className=" md:size-6 size-5"
              />
            </div>
            <div className="h-px w-full bg-white" />
            <div className="flex transition-all duration-500 md:group-hover:px-12 gap-2  items-center uppercase text-xs  pt-1  px-10  md:group-hover:text-charcoal">
              {work.frameworks.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px] py-5 group">
              <img
                src={work.image}
                alt={work.name}
                className="object-cover w-full h-full rounded-md blur-2xl brightness-20 transition-all duration-500 group-hover:brightness-40 "
              />
              <img
                src={work.image}
                alt={work.name}
                className="absolute bg-center px-14 rounded-xl "
              />
            </div>
          </div>
        ))}
      </div>
      <div
        ref={previewRef}
        className="fixed top-0 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[500px] md:block hidden opacity-0"
      >
        {currentIndex !== null && (
          <img
            src={projects[currentIndex].image}
            alt="preview"
            className="object-cover w-full h-full"
          />
        )}
      </div>
    </section>
  );
};

export default Works;
