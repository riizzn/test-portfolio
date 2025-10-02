
import { Planet } from "../components/Hole";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeader from "../components/AnimatedHeader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 855 });
    const aboutText = `I help growing brand and startups gain an
     unfair advantage through premium
      result driven webs/apps`;
    const   bigText=`rezan`
    const smallText='404 no errors found'



  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeader aboutText={aboutText} bigText={bigText} smalltext={smallText}/>
    
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
