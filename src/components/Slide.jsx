import React from 'react'
import Phrase from './Phrase'
import { motion, useTransform } from 'framer-motion'

const Slide = (props) => {
    const direction = props.direction == 'left' ? -1 : 1;
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
    return (
      <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
        <Phrase src={props.src}/>
      </motion.div>
    )
}

export default Slide    