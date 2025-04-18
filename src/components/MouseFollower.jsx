import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";

const MouseFollower = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const location = useLocation();

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

    // Reset states when page changes
    setIsHovered(false);
    setIsImageHovered(false);

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);
    const handleImageHover = () => setIsImageHovered(true);
    const handleImageUnhover = () => setIsImageHovered(false);

    // Function to attach event listeners to all interactive elements
    const attachEventListeners = () => {
      // Select all interactive elements including header elements
      const interactiveElements = document.querySelectorAll(
        'a, button, input, [role="button"], h1, .menu, .text-black'
      );

      const imageElements = document.querySelectorAll('img');

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleUnhover);
      });

      imageElements.forEach((el) => {
        el.addEventListener("mouseenter", handleImageHover);
        el.addEventListener("mouseleave", handleImageUnhover);
      });
    };

    // Remove all previous event listeners
    const removeEventListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, [role="button"], h1, .menu, .text-black'
      );
      const imageElements = document.querySelectorAll('img');

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
      
      imageElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleImageHover);
        el.removeEventListener("mouseleave", handleImageUnhover);
      });
    };

    // Initial attachment
    attachEventListeners();
    
    // Setup a recurring check to handle dynamically loaded content
    const intervalId = setInterval(attachEventListeners, 1000);
    
    // Also run on any detected route change
    const observer = new MutationObserver(() => {
      setTimeout(() => {
        removeEventListeners();
        attachEventListeners();
      }, 200);
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
      removeEventListeners();
    };
  }, [isMobileDevice, location.pathname]); // Add location.pathname as dependency

  if (isMobileDevice) return null;

  return (
    <motion.div
      className={`cursor-follower pointer-events-none fixed left-0 top-0 z-[9999] ${
        !isImageHovered ? 'mix-blend-difference' : ''
      }`}
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={{ 
          scale: isImageHovered ? 8 : isHovered ? 6 : 1,
          opacity: isHovered || isImageHovered ? 0.8 : 1
        }}
        transition={{ 
          duration: 0.2,
          ease: "easeOut"
        }}
      >
        <div className={`h-3 w-3 rounded-full border ${isImageHovered ? 'bg-black' : 'border-white bg-white'}`} />
        {isImageHovered && (
          <span className="absolute text-white text-[2px] font-medium">
            Click
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MouseFollower;