import React, { useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Planet } from "../components/Hole";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 855 });
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const aboutText = `I help growing brand and startups gain an
   unfair advantage through premium
    result driven webs/apps`;

  useGSAP(() => {
    const tl = gsap.timeline();
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
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-10 pt-16 sm:gap-16  "
          >
            <p className="text-xs font-light tracking-wide uppercase px-10">
              404 no errors found
            </p>
            <div className="px-10">
              <h2 className="flex flex-col flex-wrap  uppercase  banner-text-responsive gap-12 sm:gap-16 md:block">
                Rezan
              </h2>
            </div>
          </div>
        </div>
        <div className="relative px-10 ">
          <div className="absolute inset-x-0 border-t-2" />
          <div className="py-12 sm:py-16 text-end">
            <AnimatedText
              text={aboutText}
              className="uppercase font-light value-text-responsive "
            />
          </div>
        </div>
      </div>
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float>
        
            <Planet scale={isMobile? 0.7 : 1} />
          </Float>

          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
