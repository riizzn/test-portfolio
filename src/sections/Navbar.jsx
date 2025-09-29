import React, { useEffect, useRef, useState } from "react";
import { navItems, socialLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  const socialRef = useRef([]);
  const toplineRef = useRef(null);
  const bottomlineRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set([linksRef.current, contactRef.current, socialRef.current], {
      autoAlpha: 0,
      x: -20,
    });
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        contactRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<+0.2"
      )
      .to(
        socialRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "<"
      );
    iconTl.current = gsap
      .timeline({ paused: true })
      .to(toplineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomlineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed z-50 flex flex-col justify-between bg-pearl text-black/80  w-full h-screen   p-4 sm:p-6 md:p-10 uppercase gap-y-10 md:w-1/2 md:left-1/2 "
      >
        <div className="flex flex-col gap-y-2 text-5xl tracking-tight mt-10 md:mt-15">
          {navItems.map((item, i) => (
            <div key={i} ref={(el) => (linksRef.current[i] = el)}>
              <Link
                to={`${item}`}
                smooth
                offset={0}
                duration={1200}
                className="transition-all duration-300 cursor-pointer hover:text-black"
              >
                {item}
              </Link>
            </div>
          ))}
        </div>

        <div ref={contactRef} className="flex flex-col gap-5 justify-center">
          <p className="text-center text-black/50 text-xs">
            for work - contact below
          </p>
          <button className="rounded-full w-full p-5 md:p-6 text-2xl md:text-3xl bg-charcoal text-pearl font-cs  italic ">
            hi@rezan.me
          </button>
        </div>
        <div className="flex justify-between max-w-[400px] w-full mx-auto">
          {socialLinks.map((social, i) => (
            <a
              ref={(el) => (socialRef.current[i] = el)}
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.title}
            >
              <img
                src={social.icon}
                alt={social.title}
                loading="lazy"
                className="w-8 h-8"
              />
            </a>
          ))}
        </div>
      </nav>
      <div
        className="fixed z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300
    bg-pearl rounded-full cursor-pointer w-14 h-14 md:w-20 md:h-20 top-4 right-10"
        onClick={toggleMenu}
        style={
          showBurger
            ? { clipPath: "circle(50% at 50% 50%)" }
            : { clipPath: "circle(0% at 50% 50%)" }
        }
      >
        <span
          ref={toplineRef}
          className="block w-8 h-0.5 bg-charcoal rounded-full origin-center"
        ></span>
        <span
          ref={bottomlineRef}
          className="block w-8 h-0.5 bg-charcoal rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
