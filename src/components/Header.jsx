import React from "react";
import Button from "./Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const variants = {
  open: {
    width: "20rem",
    height: "30rem",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "6rem",
    height: "2rem",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const Header = ({ currentPage }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="fixed z-50 top-0 left-0 w-full h-16 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold mt-[70px] ml-[50px] text-black cursor-pointer"
        >
          VT
        </Link>
      </div>
      <div className="fixed right-[50px] top-[50px] z-50">
        <motion.div
          className="menu h-[40rem] w-[30rem] bg-gray-900 rounded-xl relative"
          variants={variants}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && <Nav setIsActive={setIsActive} />}
          </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>
      {currentPage === "Cmain" && (
        <div className="fixed bottom-0 w-full h-full flex justify-between items-end">
          <a
            target="_blank"
            href="https://github.com/vedant-tailor/"
            className="text-black ml-[50px] mb-[30px]"
          >
            Independent Developer Vedant Tailor
          </a>
          <a
            target="_blank"
            href="mailto:vedanttailor@outlook.com"
            className="text-black mr-[50px] mb-[30px]"
          >
            Mail
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
