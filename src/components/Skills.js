import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, 
  FaGithub, FaNpm, FaGitAlt, FaDatabase,
  FaServer, FaCode, FaPencilRuler, FaChartBar,
  FaJava, FaPython
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, 
  SiFirebase, SiExpress,
  SiC, SiCplusplus, SiMysql, SiOracle, SiEjs
} from 'react-icons/si';

const skillIcons = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'EJS', icon: <SiEjs />, color: '#B4CA65' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#10b981' },
  { name: 'npm', icon: <FaNpm />, color: '#CB3837' },
  // { name: 'C', icon: <SiC />, color: '#03599C' },
  { name: 'C++', icon: <SiCplusplus />, color: '#044F88' },
  { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'Oracle', icon: <SiOracle />, color: '#F80000' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'GitHub', icon: <FaGithub />, color: '#10b981' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative bg-[#0a0c12]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="skill-container-left md:w-1/2"
        >
          <h2 className="skill-heading green-gradient-text">
            <span className="caps">M</span>e and
            <br />
            MyTech Stack
          </h2>

          <div className="skill-subHeading">
            <p>
              Hi Everyone, my name is V. Dedeep. I am a fresher currently searching for a job.
               I am passionate about web development, particularly React, and I am eager to apply 
              my skills to create beautiful and user-friendly UI/UX designs.
            </p>

            <p>
              I have expertise in various programming languages including C, C++, Java, 
              Python and multiple database systems like MySQL and Oracle. My web development 
              skills span JavaScript, React, Node.js and templating engines like EJS.
            </p>
            <p>
              My passion lies in creating scalable and efficient applications with 
              clean code and intuitive user interfaces that deliver exceptional 
              user experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="skill-container-right md:w-1/2"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8">
            {skillIcons.map((skill, index) => (
              <SkillIcon 
                key={index} 
                name={skill.name} 
                icon={skill.icon} 
                color={skill.color}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillIcon = ({ name, icon, color, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.1 }}
    >
      <div 
        className="w-14 h-14 rounded-md flex items-center justify-center text-3xl shadow-md border border-green-500/20"
        style={{ 
          color: color,
          backgroundColor: 'rgba(0,0,0,0.3)',
          boxShadow: `0 4px 10px rgba(16, 185, 129, 0.2)`
        }}
      >
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-200">{name}</p>
    </motion.div>
  );
};

export default Skills; 