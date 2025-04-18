import React from 'react'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Slide from './Slide'


const Marquee = () => {
    const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  return (
    <main className="overflow-hidden bg-[#fdfaf6]">
        <div className='h-[50vh]'/>
      <div ref={container}>
        <Slide
          src={
            "https://images.unsplash.com/photo-1744144501177-5666f17e190c?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
        />
        <Slide
          src={'https://images.unsplash.com/photo-1744361448609-c5d3417f00ce?q=80&w=2457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          direction={"right"}
          left={"-25%"}
          progress={scrollYProgress}
        />
        <Slide
          src={'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}
          direction={"left"}
          left={"-75%"}
          progress={scrollYProgress}
        />
      </div>
      <div className="h-[50vh]" />
    </main>
  );
}

export default Marquee