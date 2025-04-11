import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    <div className="main  bg-black">
      <div ref={cointiner} className="section h-[300vh] w-full relative">
        <div className="sticky top-0 left-0 h-screen w-full flex justify-center items-center">
          <motion.div
            style={{ scale: scale4 }}
            className="container h-[25vh] w-[25vw] bg-[#fdfaf6] flex flex-col justify-around items-center md:p-2"
          >
            <motion.h1 
              // style={{ opacity }}
              className="w-full text-[15px] md:text-[30px] text-black font-semibold md:font-light opacity-100 px-4"
            >
              About Slider Viewer
            </motion.h1>

            <motion.p 
              // style={{ opacity }}
              className="w-full text-gray-500 font-light text-base text-[0.5rem] lg:text-lg px-4 opacity-100"
            >
              Slider Viewer is a web application that allows you to view
              images in a slider format.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
