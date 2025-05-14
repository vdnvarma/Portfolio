import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Enhanced animated particles component with glow effect
const AnimatedParticles = () => {
  const particles = Array(30).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 3, // Increased size between 3-13px (was 2-10px)
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 5,
    blur: Math.random() * 2 + 1,
    opacity: Math.random() * 0.4 + 0.2 // Increased opacity 0.2-0.6 (was 0.1-0.3)
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle at center, rgba(16, 185, 129, ${particle.opacity + 0.15}) 0%, rgba(16, 185, 129, 0) 70%)`,
            boxShadow: `0 0 ${particle.blur * 3}px rgba(16, 185, 129, ${particle.opacity + 0.2})`,
            filter: `blur(${particle.blur}px)`
          }}
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50
            ],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity * 0.8, particle.opacity * 1.2, particle.opacity],
            scale: [1, 1.2, 0.8, 1.1, 1]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

// Starry background effect
const StarryBackground = () => {
  const stars = Array(100).fill().map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5, // Increased size between 0.5-2.5px (was 0.5-2px)
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.6 + 0.4, // Increased opacity 0.4-1.0 (was 0.3-0.8)
    blinkDuration: Math.random() * 3 + 2
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-green-200"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            boxShadow: `0 0 ${star.size * 1.5}px rgba(16, 185, 129, ${star.opacity})`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.5, star.opacity],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: star.blinkDuration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

// Enhanced animated code lines effect
const CodeLines = () => {
  const lines = Array(15).fill().map((_, i) => ({
    id: i,
    width: Math.random() * 40 + 20,
    left: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.1, // Increased opacity 0.1-0.6 (was 0.05-0.35)
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 5,
    height: Math.random() < 0.3 ? 2 : 1
  }));

  return (
    <div className="absolute inset-0 overflow-hidden mix-blend-screen pointer-events-none">
      {lines.map(line => (
        <motion.div
          key={line.id}
          className="absolute bg-gradient-to-r from-transparent via-green-500 to-transparent"
          style={{
            width: `${line.width}%`,
            height: line.height,
            left: `${line.left}%`,
            top: `${(line.id / lines.length) * 100}%`,
            opacity: line.opacity,
            filter: 'blur(0.5px)'
          }}
          animate={{
            x: [-100, 200],
            opacity: [0, line.opacity, 0],
            boxShadow: ['0 0 0px transparent', `0 0 10px rgba(16, 185, 129, ${line.opacity * 3})`, '0 0 0px transparent']
          }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Enhanced floating geometric shapes
const FloatingShapes = () => {
  const shapes = [
    { id: 1, shape: 'circle', size: 24, x: 10, y: 20, rotation: 0, delay: 0 },
    { id: 2, shape: 'square', size: 18, x: 85, y: 30, rotation: 45, delay: 1.5 },
    { id: 3, shape: 'triangle', size: 22, x: 75, y: 75, rotation: 0, delay: 0.8 },
    { id: 4, shape: 'circle', size: 15, x: 25, y: 85, rotation: 0, delay: 2.2 },
    { id: 5, shape: 'square', size: 26, x: 65, y: 15, rotation: 15, delay: 1.2 },
    { id: 6, shape: 'diamond', size: 20, x: 15, y: 55, rotation: 45, delay: 0.5 },
    { id: 7, shape: 'circle', size: 18, x: 90, y: 60, rotation: 0, delay: 1.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map(shape => (
        <motion.div
          key={shape.id}
          className={`absolute ${
            shape.shape === 'circle' 
              ? 'rounded-full border-2 border-green-500/40' // Increased opacity /40 (was /30)
              : shape.shape === 'square'
                ? 'border-2 border-green-500/40' // Increased opacity /40 (was /30)
                : shape.shape === 'diamond'
                  ? 'border-2 border-green-500/40 rotate-45' // Increased opacity /40 (was /30)
                  : 'border-l-[18px] border-r-[18px] border-b-[30px] border-l-transparent border-r-transparent border-b-green-500/40' // Increased opacity /40 (was /30)
          }`}
          style={{
            width: shape.shape !== 'triangle' ? `${shape.size}px` : 0,
            height: shape.shape !== 'triangle' ? `${shape.size}px` : 0,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            rotate: `${shape.rotation}deg`,
            boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)',
            backdropFilter: 'blur(2px)'
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [`${shape.rotation}deg`, `${shape.rotation + 360}deg`],
            scale: [1, 1.1, 0.9, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: shape.delay
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: shape.delay
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: shape.delay * 0.5
            }
          }}
        />
      ))}
    </div>
  );
};

const TypewriterText = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const text = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing mode
        setCurrentText(text.substring(0, currentText.length + 1));
        
        // If reached the end of the text
        if (currentText.length === text.length) {
          // Pause before starting to delete
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting mode
        setCurrentText(text.substring(0, currentText.length - 1));
        
        // If finished deleting
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100); // Delete faster than type
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts]);
  
  return (
    <div className="h-12 md:h-16 mt-4 flex items-center">
      <span className="green-gradient-text font-bold text-lg md:text-2xl">
        {currentText}
        <span className="inline-block h-6 w-1 ml-1 bg-green-500 cursor-blink"></span>
      </span>
    </div>
  );
};

// Modern animated scroll indicator
const ScrollIndicator = () => {
  // Function to scroll to about section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="absolute bottom-20 sm:bottom-16 md:bottom-10 w-full flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center cursor-pointer group"
        onClick={scrollToAbout}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-green-500 text-sm mb-2 group-hover:text-green-400 transition-colors duration-300">
          Scroll Down
        </span>
        <motion.div
          className="w-8 h-12 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "easeInOut" 
          }}
        >
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M12 2L12 38M12 38L2 28M12 38L22 28" 
              stroke="#10b981" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5
              }}
              className="group-hover:stroke-green-400 transition-colors duration-300"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const roles = [
    "MERN Stack Developer",
    "Web Developer",
    "Frontend Developer", 
    "Backend Developer",
    "Software Developer",
  ];

  return (
    <section id="home" className="relative w-full min-h-screen mx-auto flex items-center justify-center overflow-hidden pt-[80px] sm:pt-[100px] md:pt-[120px] pb-[80px] sm:pb-[100px] md:pb-[120px]">
      {/* Interactive background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzEwYjk4MSIgZmlsbC1vcGFjaXR5PSIwLjA1IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIi8+PC9nPjwvc3ZnPg==')] z-0 opacity-80"></div>
      <AnimatedParticles />
      <StarryBackground />
      <CodeLines />
      <FloatingShapes />
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-12 md:gap-16 z-10 mt-4 sm:mt-0">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-col justify-center">
              <motion.h1 
                className="text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 leading-tight relative"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Hi! I'm 
              </motion.h1>
              
              <motion.div
                className="mt-2 mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black green-gradient-text">
                    V. Dedeep
                  </h2>
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-1 bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mt-2">
                  Nagendra Varma
                </h3>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <TypewriterText texts={roles} />
              </motion.div>
              
              <motion.p 
                className="mt-6 text-secondary text-lg max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                Building innovative web experiences with modern technologies.
                Passionate about creating clean, user-friendly interfaces that solve real-world problems.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex mt-10 sm:mt-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <motion.a
                href="#contact"
                className="green-gradient-bg py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-green-500/20 rounded-xl transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's Talk</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <motion.span 
                  className="absolute -right-12 -top-12 w-20 h-20 bg-green-300/20 rounded-full"
                  animate={{ 
                    scale: [0.1, 2],
                    opacity: [0.8, 0] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </motion.a>
              <motion.a
                href="#projects"
                className="ml-4 py-3 px-8 outline-none w-fit text-white font-bold border border-green-500 rounded-xl hover:bg-green-500/20 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Work</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-green-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-auto flex justify-center mt-8 sm:mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            {/* Animated rings around profile */}
            <motion.div 
              className="absolute -inset-1 rounded-full border-2 border-dashed border-green-500/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -inset-4 rounded-full border-2 border-dashed border-green-500/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Profile container with enhanced glow */}
            <div className="floating w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full relative">
              <motion.div
                className="absolute inset-0 rounded-full green-gradient-bg opacity-90"
                animate={{ 
                  boxShadow: [
                    '0 0 25px rgba(16, 185, 129, 0.6)', 
                    '0 0 35px rgba(16, 185, 129, 0.8)', 
                    '0 0 25px rgba(16, 185, 129, 0.6)'
                  ] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center overflow-hidden relative p-1">
                <img 
                  src={require("../assets/images/userassets/profilepic.jpg")} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
                
                {/* Enhanced animated highlight effect */}
                <motion.div 
                  className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  animate={{ left: ['100%', '-100%'] }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    repeatDelay: 4,
                    ease: "easeInOut" 
                  }}
                />
              </div>
              
              {/* Floating tech badges with enhanced animations */}
              <motion.div
                className="absolute -top-5 -right-5 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-2xl shadow-lg shadow-green-500/30"
                animate={{ 
                  y: [0, -10, 0],
                  boxShadow: [
                    '0 4px 12px rgba(16, 185, 129, 0.3)',
                    '0 8px 20px rgba(16, 185, 129, 0.5)',
                    '0 4px 12px rgba(16, 185, 129, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  delay: 1,
                  ease: "easeInOut"
                }}
              >
                <span className="text-blue-500" role="img">⚛️</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-2 -left-8 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl shadow-lg shadow-green-500/30"
                animate={{ 
                  y: [0, -8, 0],
                  boxShadow: [
                    '0 4px 12px rgba(16, 185, 129, 0.3)',
                    '0 8px 20px rgba(16, 185, 129, 0.5)',
                    '0 4px 12px rgba(16, 185, 129, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              >
                <span className="text-yellow-500" role="img">🚀</span>
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl shadow-lg shadow-green-500/30"
                animate={{ 
                  y: [0, -12, 0],
                  boxShadow: [
                    '0 4px 12px rgba(16, 185, 129, 0.3)',
                    '0 8px 20px rgba(16, 185, 129, 0.5)',
                    '0 4px 12px rgba(16, 185, 129, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  delay: 1.5,
                  ease: "easeInOut"
                }}
              >
                <span className="text-green-500" role="img">📱</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* New elegant scroll indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero; 