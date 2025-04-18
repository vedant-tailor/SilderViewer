import React, { useRef } from "react";
import Marquee from "../Marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import KnowSection from "../KnowSection";
import AboutFooter from "../AboutFooter";

const About = () => {
  const cointiner = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cointiner,
    offset: ["start start", "end end"],
  });
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const y = useTransform(scrollYProgress, 
    [0, 1], 
    [0, -100]
  );
  const opacity = useTransform(scale4, [3.9, 4], [0, 1]);
  
  return (
    <div className="main bg-black">
      <div ref={cointiner} className="section h-[300vh] w-full relative">
        <div className="absolute top-[11%] left-[39%]">
          <h1 className="hidden md:block text-white text-xs md:text-2xl">Scroll To Know About VT </h1>
          <h1 className="block md:hidden text-white text-xs md:text-2xl">Scroll</h1>
        </div>
        <div className="sticky top-0 left-0 h-screen w-full flex justify-center items-center">
          <motion.div
            style={{ scale: scale4 }}
            className="container h-[25vh] w-[25vw] bg-[#fdfaf6] flex flex-col justify-around items-center md:p-2"
          >
            <motion.h1 
              style={{ opacity }}
              className="w-full text-[15px] md:text-[30px] text-black font-semibold md:font-light opacity-100 px-4"
            >
              About <span className="text-blue-500"> VT </span>
            </motion.h1>

            <motion.p 
              style={{ opacity }}
              className="w-full text-gray-500 font-light text-base text-[0.5rem] lg:text-lg px-4 opacity-100"
            >
              <span className="text-blue-500"> Vedant Tailor </span> is Developer of Slider Viewer
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* marquee section */}

      <Marquee />
      
      {/* Know Section */}
      <KnowSection />
      
      {/* Footer Section */}
      <AboutFooter />
    </div>
  );
};

export default About;
