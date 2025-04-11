import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseFollower = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 100 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      setIsMobileDevice(isMobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobileDevice) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX +2);
      cursorY.set(e.clientY +2);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobileDevice]);

  useEffect(() => {
    if (isMobileDevice) return;

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, [isMobileDevice]);

  if (isMobileDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <motion.div
        className="h-3 w-3 rounded-full border bg-white border-gray-400"
        animate={{ scale: isHovered ? 1.5 : 1 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default MouseFollower;