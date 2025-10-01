import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary2 = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: 1.5,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -20,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: 1.5,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 30,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: 1.5,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -15,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: 1.5,
      },
    });
  });

  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-10 contact-text-responsive ">
      <div id="title-service-1">
        <p>Architecture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center translate-x-16 gap-3"
      >
        <p className="font-medium">Development</p>
        <div className="w-10 h-1 md:w-16 bg-gold" />
        <p>Deployement</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center -translate-x-48 gap-3"
      >
        <p>APIs</p>
        <div className="w-10 h-1 md:w-16 bg-gold" />
        <p>Frontend</p>
        <div className="w-10 h-1 md:w-16 bg-gold" />
        <p>Scalablity</p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary2;
