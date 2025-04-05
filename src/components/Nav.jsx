import React from 'react'
import { navData } from './utils/navData'
import { motion } from 'framer-motion'
import { footerData } from './utils/navData'



const Nav = () => {

    const prepestive = {
        initial: {
            opacity: 0,
            rotateX: 124,
            translateY: 80,
            translateX: -20,
        },
        enter: (i) =>({
            opacity: 1,
            rotateX: 0,
            translateY: 0,
            translateX: 0,
            transition: {
                duration: 0.3,
                opacity: {duration: 0.35}, 
                delay: 0.5 + (i * 0.1),
                ease: [0.215, 0.61, 0.355, 1]
            },

        }),
        exit: {
            opacity: 0,
            transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
        }
    }

    const footerPrepestive = {
        initial: {
            opacity: 0,
            y: 20,
        },
        enter: (i) =>({
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 0.5 + (i * 0.1),
                ease: [0.215, 0.61, 0.355, 1]
            },

        }),
        exit: {
            opacity: 0,
            transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
        }
    }
  return (
    <div className="nav h-full pt-[100px] pr-[40px] pb-[50px] pl-[40px] flex flex-col justify-between">
      <div className="navbody">
        {navData.map((item, index) => (
          <div className="linkcontain" key={index}>
            <motion.div
              custom={index}
              className="navitem"
              variants={prepestive}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <a
                className="text-white text-[2.5rem] font-extralight"
                href={item.link}
              >
                {item.title}
              </a>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="navfooter flex justify-between">
        {footerData.map((item, i) => (
            <motion.a
              className="text-white text-[1rem] font-light"
              key={`f_${i}`}
              custom={i}
              variants={footerPrepestive}
              animate="enter"
              exit="exit"
              initial="initial"
              href={item.link}
            >
              {item.title}
            </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Nav