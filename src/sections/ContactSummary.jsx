import React, { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = [
    "contact us",
    "contact us",
    "contact us",
    "contact us",
    "contact us",
  ];



  return (
    <section
      ref={containerRef}
      className=" mt-20 flex flex-col gap-12 justify-between  items-center min-h-screen "
    >
      <Marquee items={items} className={"text-charcoal bg-pearl"} />
      <div className="font-light text-center contact-text-responsive">
        <p>
          "Let's build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="font-"> inspiring</span> <br />
          web application <span>togather</span>"
        </p>
      </div>
      <Marquee
        items={items2}
        className="border-y-2 border-pearl/70 "
        iconClassName="stroke-pearl stroke-2 text-primary "
        icon="material-symbols-light:square"
        reverse={true}
      />
    </section>
  );
};

export default ContactSummary;
