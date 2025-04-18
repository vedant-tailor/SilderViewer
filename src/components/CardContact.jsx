import React from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";


const CardContact = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const y = useTransform(progress, range, [0, i * 30]);

  return (
    <div
      ref={container}
      className="h-[100vh] flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          y,
        }}
        className="w-[80%] max-w-4xl p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="flex flex-col md:flex-row h-full gap-6">
          <div className="w-full md:w-[40%] relative">
            <p className="mb-4 text-base md:text-lg">{description}</p>
            <div className="mt-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black hover:opacity-80 transition-opacity"
              >
                <span className="mr-2">See more</span>
                <svg
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
          </div>

          <div className="w-full md:w-[60%] h-60 md:h-[300px] rounded-lg overflow-hidden">
            <motion.div
              className="w-full h-full"
              style={{ scale: imageScale }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-full object-cover rounded-lg"
                src={`src/assets/skills/${src}`}
                alt={title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/400x300?text=Image+Not+Found";
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardContact;
