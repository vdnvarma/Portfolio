import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './index';
import { icon } from '@fortawesome/fontawesome-svg-core';

// Project data with placeholder images
// You can replace these with your actual images later
const projects = [
  {
    id: "project1",
    number: "01",
    title: "Schulen App",
    description: "A MERN stack web application for user and project management, offering authentication, task management, and real-time collaboration tools like video meetings and whiteboards, enhancing team workflows.",
    tags: [
      { name: 'react', icon: "" },
      { name: 'mongodb', icon: "" },
      { name: 'node', icon: "" },
      { name: 'express', icon: "" },
    ],
    links: {
      github: "https://github.com/vdnvarma/schulen-app",
      demo: "https://schulen.tech/"
    }
  },
  {
    id: "project2",
    number: "02",
    title: "VAgent",
    description: "A MERN stack web application for project creation, authentication, and real-time collaboration. It integrates Socket.IO for live chat and Google Gemini API for AI-powered assistance in project management.",
    
    tags: [
      { name: 'react', icon: "" },
      { name: 'javascript', icon: "" },
      { name: 'tailwind', icon: "" },
      { name: 'redux', icon: "" },
    ],
    links: {
      github: "https://github.com/vdnvarma/VAgent",
      demo: "https://vagent.onrender.com/"
    }
  },
  {
    id: "project3",
    number: "03",
    title: "Postbook",
    description: "A platform for users to sign up, log in, and create content, offering an interactive experience and easy post management.",
    tags: [
      { name: 'ejs', icon: "" },
      { name: 'javascript', icon: "" },
      { name: 'node', icon: "" },
      { name: 'mongodb', icon: "" },
    ],
    links: {
      github: "https://github.com/vdnvarma/Postbook",
      demo: "https://postbookbeta.onrender.com"
    }
  },
  {
    id: "project4",
    number: "04",
    title: "Library Management System",
    description: "A Library Management System in Java is a software application that helps manage book inventories, member records, and book issuance/returns efficiently. It streamlines library operations through a user-friendly interface using Java and JDBC for database connectivity",
    tags: [
      { name: 'react', icon: "" },
      { name: 'java', icon: "" },
      { name: 'mysql', icon: "" },
      { name: 'springboot', icon: "" },
    ],
    links: {
      github: "https://github.com/vdnvarma/library_management_system",
      demo: "https://lmsbeta.onrender.com"
    }
  },
  {
    id: "project5",
    number: "05",
    title: "Ochi",
    description: "  Built a web interface inspired by Ochi using React.js, Framer Motion, and Locomotive Scroll, with smooth animations and responsive design.",
    tags: [
      { name: 'react', icon: "" },
      { name: 'javascript', icon: "" },
      { name: 'node', icon: "" },
    ],
    links: {
      github: "https://github.com/vdnvarma/ochi",
      demo: "https://ochibeta.netlify.app/"
    }
  },
  {
    id: "project6",
    number: "06",
    title: "Docs",
    description: "Developed a React JS webpage with draggable note cards, offering an interactive interface and seamless, responsive experience.",
    tags: [
      { name: 'react', icon: "" },
      { name: 'javascript', icon: "" },
      { name: 'tailwind', icon: "" },
    ],
    links: {
      github: "https://github.com/vdnvarma/docs",
      demo: "https://docsbeta.netlify.app/"
    }
  },
  {
    id: "project7",
    number: "07",
    title: "Real-Time Tracker",
    description: "Built a real-time tracker app using EJS, Express, and Node.js that displays users' live location. Utilized Geolocation API and Leaflet for map rendering and location tracking.",
    tags: [
      { name: 'ejs', icon: "" },
      { name: 'node', icon: "" },
      { name: 'express'},
      { name: 'javascript', icon: "" },
    ],
    links: {
      github: "https://github.com/vdnvarma/realtime-tracker",
      demo: "https://realtime-tracker-957d.onrender.com"
    }
  },
  {
    id: "project8",
    number: "08",
    title: "Weather App",
    description: "Developed a weather telecast project using HTML, CSS, and JavaScript, delivering real-time forecasts with engaging visuals for an interactive user experience.",
    tags: [
      { name: 'html', icon: "" },
      { name: 'css', icon: "" },
      { name: 'javascript', icon: "" },
    ],
    links: {
      github: "https://github.com/vdnvarma/weatherapp",
      demo: "https://weatherappdelta.netlify.app/"
    }
  },
  {
    id: "project9",
    number: "09",
    title: "Easy Travel",
    description: "Integrated HTML and CSS to develop a visually engaging and user-friendly travel interface, enabling users to explore destinations and customize itineraries with ease.",
    tags: [
      { name: 'html', icon: "" },
      { name: 'css', icon: "" },
      { name: 'javascript', icon: "" },
      { name: 'firebase', icon: "" }
    ],
    links: {
      github: "https://github.com/vdnvarma/easytrave",
      demo: "https://easytravelbeta.netlify.app/"
    }
  },
  {
    id: "project10",
    number: "10",
    title: "Dictionary App",
    description: "Crafted a dictionary app using React and Tailwind CSS, designed to fetch and display definitions, parts of speech, and examples through the Dictionary API.",
    tags: [
      { name: 'react', icon: "" },
      { name: 'javascript', icon: "" },
      { name: 'tailwind', icon: "" },
    ],
    links: {
      github: "https://github.com/vdnvarma/dictionaryapp",
      demo: "https://dictionarybeta.netlify.app/"
    }
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-accent-1/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-accent-2/5 blur-3xl"></div>
      
      <motion.div
        className="mb-8 sm:mb-12 text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-secondary text-lg uppercase tracking-wider">My work</p>
        <h2 className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mt-2 gradient-text">Projects.</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full mb-10 sm:mb-16 relative z-10"
      >
        <p className="text-secondary text-center text-base sm:text-lg max-w-3xl mx-auto">
          These projects showcase my skills and experience through real-world examples. 
          Each project is briefly described with links to code repositories and live demos.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col gap-16 sm:gap-24 relative z-10">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className={`flex ${index % 2 === 1 ? 'justify-start' : 'justify-end'} w-full`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <div className={`w-full md:w-[90%] ${index % 2 === 1 ? 'md:ml-[10%]' : 'md:mr-[10%]'}`}>
              <Card 
                title={project.title}
                description={project.description}
                tags={project.tags}
                number={project.number}
                links={project.links}
                isOdd={index % 2 === 0}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 