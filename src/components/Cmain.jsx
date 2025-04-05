import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { data } from './utils/cardsData'

const Cmain = () => {
  const [hoveredPanel, setHoveredPanel] = useState(null);
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [bgColor, setBgColor] = useState('bg-black');
  
  useEffect(() => {
    const handleScroll = () => {
      if(selectedPanel) {
        setSelectedPanel(null);
        setBgColor('bg-black');
      }
    };
    
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [selectedPanel]);

  return (
    <div
      className={`${bgColor} min-h-screen w-full overflow-hidden text-white flex items-center justify-center transition-colors duration-500`}
    >
      <div className="flex flex-row items-center gap-[2px] mx-auto">
        {data.map((card, index) => (
          <motion.div
            key={card.id}
            className="h-[80vh] w-[80px] relative cursor-pointer overflow-hidden"
            initial={{ opacity: 0, x: 10 }}
            animate={{
              opacity: selectedPanel ? (selectedPanel === card.id ? 1 : 0) : 1,
              x: 0,
              width: selectedPanel
                ? selectedPanel === card.id
                  ? "60vw"
                  : "20px"
                : "80px",
            }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            onMouseEnter={() => !selectedPanel && setHoveredPanel(card.id)}
            onMouseLeave={() => !selectedPanel && setHoveredPanel(null)}
            whileHover={
              !selectedPanel
                ? {
                    width: "100px",
                    transition: { duration: 0.3 },
                  }
                : null
            }
            onClick={() => {
              const newSelection = selectedPanel === card.id ? null : card.id;
              setSelectedPanel(newSelection);
              setBgColor(newSelection ? card.color : 'bg-black');
            }}
          >
            <div className="w-full h-full">
              <img
                src={card.image}
                alt={card.title}
                className={`w-full h-full object-cover transform transition-transform duration-500 ${
                  selectedPanel === card.id
                    ? "grayscale-0 contrast-100 brightness-100 scale-105"
                    : "grayscale contrast-125 brightness-75"
                }`}
              />
            </div>

            {(hoveredPanel === card.id || selectedPanel === card.id) && (
              <motion.div
                className={`absolute ${selectedPanel === card.id ? 'top-0 bg-gradient-to-b' : 'bottom-0 bg-gradient-to-t'} from-black to-transparent left-0 w-full p-4`}
                initial={{ opacity: 0, y: selectedPanel === card.id ? -20 : 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.p 
                  className={`para-text ${card.textColor} ${selectedPanel === card.id ? 'text-4xl' : 'text-xs'} `}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  {card.title}
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Cmain