import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ isActive, setIsActive }) => {
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="bg-gray-900 h-[2rem] w-[6rem] rounded-xl cursor-pointer overflow-hidden absolute top-0 right-0 border border-gray-800"
    >
      <motion.div
        animate={{ top: isActive ? "-100%" : "0%" }}
        className="slider relative h-full w-full"
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="h-full w-full flex justify-center items-center">
          <p className="text-white text-sm font-light">MENU</p>
        </div>
        <div className="h-full w-full absolute top-[100%] flex justify-center items-center bg-white text-black">
          <p className="text-sm font-light">CLOSE</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Button