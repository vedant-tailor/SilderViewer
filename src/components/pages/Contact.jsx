import React from "react";
import { useRef } from "react";
import { projects } from "../utils/contactData";
import CardContact from "../CardContact";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const Contact = () => {
  const container = useRef(null);
  const isInView = useRef(null);
  const inView = useInView(isInView);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="min-h-screen bg-[#fdfaf6] relative">
      {/* Fixed content section */}
      <motion.div
        className="w-full md:w-1/2 space-y-8 p-4 md:p-8 lg:p-16 fixed top-0 right-0 h-screen flex flex-col justify-center z-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div
          className="space-y-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 leading-tight">
            MY SERVICES INCLUDE LEADING-, COLLABORATING- AND CONSULTING ON WEB
            DEVELOPMENT PROJECTS. MY EXPERTISE IS IN MOTION, CREATIVE
            DEVELOPMENT AND ACCESSIBILITY.
          </h1>
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-black">SEND ME AN EMAIL:</h2>
          <a
            href="mailto:vedanttailor@outlook.com"
            className="text-2xl font-bold text-black underline hover:text-blue-500 transition-colors cursor-pointer"
          >
            vedanttailor@outlook.com
          </a>
        </motion.div>
      </motion.div>

      {/* Scrollable content section */}
      <motion.div
        className="w-full md:w-1/2 min-h-screen hidden md:block "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Desktop version of cards */}
        <div
          ref={container}
          className="w-full h-full md:block hidden"
        >
          <div className="relative min-h-screen">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <CardContact
                  key={`p_${i}`}
                  i={i}
                  {...project}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
        </div>

        {/* Mobile version of cards */}
        <div className="w-full md:hidden p-4">
          <motion.div
            ref={isInView}
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={`mobile_p_${i}`}
                className="p-4 rounded-lg"
                style={{ backgroundColor: project.color }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    See more
                    <svg
                      className="ml-2"
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
