import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaServer, FaLaptopCode } from 'react-icons/fa';

const serviceCards = [
  {
    title: "Web Development",
    icon: <FaCode className="w-16 h-16 object-contain" />,
    description: "Building responsive and efficient web applications using modern technologies like React, Express.Js, and Tailwind CSS."
  },
  {
    title: "Frontend Development",
    icon: <FaDesktop className="w-16 h-16 object-contain" />,
    description: "Creating performant and visually appealing user interfaces with modern JavaScript frameworks and CSS techniques."
  },
  {
    title: "Backend Development",
    icon: <FaServer className="w-16 h-16 object-contain" />,
    description: "Building robust server-side applications using Node.js, Express, MongoDB, and other technologies."
  },
  {
    title: "Software Development",
    icon: <FaLaptopCode className="w-16 h-16 object-contain" />,
    description: "Crafting optimized solutions with a focus on DSA and performance."
  }
  
  
  
];

const ServiceCard = ({ index, title, icon, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)' }}
      className="bg-black-100 p-6 rounded-2xl w-full md:w-[280px] shadow-card hover:shadow-xl transition-all duration-200 border border-transparent hover:border-green-500/30"
    >
      <div className="text-white w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-500/20">
        <div className="text-green-500">{icon}</div>
      </div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-secondary">{description}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="min-h-screen py-16 md:py-20 px-6 flex items-center relative overflow-hidden mt-10 sm:mt-0">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-green-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-green-700/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col z-10">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary text-lg uppercase tracking-wider">Introduction</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mt-2 green-gradient-text">Overview.</h2>
        </motion.div>

        <motion.p 
          className="text-lg text-secondary max-w-3xl mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I'm a skilled web developer with hands-on experience in JavaScript, expertise in frameworks like React, Node.js, and Express. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8">
          {serviceCards.map((service, index) => (
            <ServiceCard 
              key={service.title}
              index={index}
              {...service} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 