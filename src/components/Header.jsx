import React from 'react'
import Button from './Button'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from './Nav'

const variants = {
    open: {
        width: '20rem',
        height: '30rem',
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75,  ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: '6rem',
        height: '2rem',
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] }
    }
  }

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className='fixed right-[50px] top-[50px] z-50'>
        <motion.div
         className="menu h-[40rem] w-[30rem] bg-gray-900 rounded-xl relative"
         variants={variants}
         animate={isActive ? 'open' : 'closed'}
         initial='closed'
        >
            <AnimatePresence>
                {isActive && <Nav />}
            </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  )
}

export default Header   