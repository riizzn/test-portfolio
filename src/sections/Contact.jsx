import React from "react";
import AnimatedHeader from "../components/AnimatedHeader";
import Marquee from "../components/Marquee";

const Contact = () => {
  const smalltext = "You Dream It, I Code it";
  const bigText = "Contact";
  const aboutText = `Got a question, how or project Idea?
    WE’D love to hear from you and discus further!`;

  const items = [
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
    "just imagine, I code",
  ];

  return (
    <section
      id="contact"
      className=" flex flex-col justify-between bg-pearl text-charcoal pt-10  min-h-screen gap-10"
    >
      <AnimatedHeader
        smalltext={smalltext}
        bigText={bigText}
        aboutText={aboutText}
      />
      <div className=" flex flex-col gap-5 px-5 ">
        <div className="flex flex-col ">
          <h4 className="uppercase text-xl ">E-MAIL</h4>
          <div className="w-full h-px bg-charcoal "/>
          <p>rezan@gmail.com</p>

        </div>
        <div className="flex flex-col ">
          <h4 className="uppercase text-xl ">PHONE</h4>
          <div className="w-full h-px bg-charcoal "/>
          <p>+337 1234 90</p>

        </div>
      </div>
      <Marquee
        items={items}
        className="bg-pearl"
       
      />
    </section>
  );
};

export default Contact;
