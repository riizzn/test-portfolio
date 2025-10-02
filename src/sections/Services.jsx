import { useRef } from "react";
import { servicesData } from "../../constants";
import AnimatedHeader from "../components/AnimatedHeader";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const aboutText = `I'm simply just goated
      at what I do. It's really hard being 
      this intelligent and beautiful.
        It's got people swarming over me.`;
  const bigText = `Services`;
  const smallText = "Beyond the screen";
  const serviceRef = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });

  useGSAP(() => {
    serviceRef.current.forEach((el) => {
      if (!el) return;
      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  },[]);

  return (
    <section
      id="services"
      className="mt-20 min-h-screen bg-pearl rounded-t-3xl text-charcoal"
    >
      <AnimatedHeader
        aboutText={aboutText}
        bigText={bigText}
        smalltext={smallText}
        withScrollTrigger={true}
      />
      {servicesData.map((service, index) => (
        <div
          ref={(el) => (serviceRef.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12   border-t-2  border-charcoal/30 bg-pearl"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className=" flex flex-col gap-6">
              <h2 className="font-normal text-3xl md:text-5xl">
                {service.title}
              </h2>
              <p className="text-sm md:text-lg text-charcoal/60">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-xl sm:gap-4 lg:text text-charcoal/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="text-xl  md:text-2xl  flex gap-1 items-center">
                      <span className="text-xs text-charcoal/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-charcoal/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
