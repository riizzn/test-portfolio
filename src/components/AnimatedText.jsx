import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, className }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(()=>{
    if(lineRefs.current.length>0){
        gsap.from(lineRefs.current,{
            y:50,
            opacity:0,
            duration:1,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger:{
                trigger:containerRef.current,
            }
        })
    }

  })


  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, i) => (
        <span  ref={((el)=>lineRefs.current[i]=el)}key={i} className="block text-pretty ">
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
