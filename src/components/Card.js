import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare,
  FaJava, FaPython
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiExpress, SiFirebase,
  SiC, SiCplusplus, SiMysql, SiOracle, SiEjs
} from 'react-icons/si';

// Map of technology names to icons
const techIcons = {
  react: { icon: <FaReact />, color: '#61DAFB' },
  mongodb: { icon: <SiMongodb />, color: '#47A248' },
  node: { icon: <FaNodeJs />, color: '#339933' },
  express: { icon: <SiExpress />, color: '#10b981' },
  javascript: { icon: <FaJsSquare />, color: '#F7DF1E' },
  tailwind: { icon: <SiTailwindcss />, color: '#06B6D4' },
  html: { icon: <FaHtml5 />, color: '#E34F26' },
  css: { icon: <FaCss3Alt />, color: '#1572B6' },
  firebase: { icon: <SiFirebase />, color: '#FFCA28' },
  c: { icon: <SiC />, color: '#03599C' },
  'c++': { icon: <SiCplusplus />, color: '#044F88' },
  java: { icon: <FaJava />, color: '#ED8B00' },
  python: { icon: <FaPython />, color: '#3776AB' },
  mysql: { icon: <SiMysql />, color: '#4479A1' },
  oracle: { icon: <SiOracle />, color: '#F80000' },
  ejs: { icon: <SiEjs />, color: '#B4CA65' },
};

const Card = ({ 
  title, 
  description,
  tags = [], 
  number, 
  links = {}, 
  isOdd = false
}) => {
  return (
    <motion.div
      className="project-card relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg bg-primary border border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.5)' 
      }}
    >
      {/* Enhanced overlay for visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 z-0"></div>

      {/* Project number */}
      <div 
        className={`project-number absolute ${
          isOdd ? 'right-3 sm:right-5' : 'left-3 sm:left-5'
        } top-3 sm:top-5 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-bold z-10 opacity-20 sm:opacity-15`}
        style={{
          color: 'rgba(16, 185, 129, 1)'
        }}
      >
        {number}
      </div>

      {/* Project content - aligned consistently on the left for all cards */}
      <div 
        className="project-content absolute left-[10%] bottom-[10%] sm:bottom-[15%] flex flex-col text-white z-30 gap-2 sm:gap-4 w-[80%]"
      >
        <div className="flex flex-wrap gap-2 w-full md:w-3/4">
          {tags.map((tag, index) => {
            const tech = techIcons[tag.name.toLowerCase()] || { icon: null, color: '#FFFFFF' };
            
            return tech.icon ? (
              <motion.div
                key={index}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: tech.color
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tech.icon}
              </motion.div>
            ) : null;
          })}
        </div>
        
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          <span className="green-gradient-text">{title}</span>
        </h3>
        
        <p className="text-sm sm:text-base text-white/90 bg-black/30 p-2 sm:p-3 rounded-lg w-full md:w-3/4 backdrop-blur-sm border-l-2 border-green-500">
          {description}
        </p>
        
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 mt-2">
          {links.demo && (
            <motion.a 
              href={links.demo}
              className="green-gradient-bg py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg text-white text-sm sm:text-base font-medium transition-colors duration-300 shadow-md w-full xs:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          
          {links.github && (
            <motion.a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="green-gradient-bg py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg text-white text-sm sm:text-base font-medium transition-colors duration-300 shadow-md w-full xs:w-auto text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={16} className="mr-1 sm:mr-2 inline" /> GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Card; 