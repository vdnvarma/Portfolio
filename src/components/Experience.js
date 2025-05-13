import React from 'react';
import { motion } from 'framer-motion';
import { FaRegCalendarAlt, FaCode } from 'react-icons/fa';

const experiences = [
  {
    title: "Senior Frontend Developer",
    company_name: "Tech Innovations Inc.",
    icon: <FaCode className="text-blue-400" />,
    iconBg: "#050816",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Digital Solutions Ltd.",
    icon: <FaCode className="text-green-400" />,
    iconBg: "#050816",
    date: "May 2020 - Dec 2021",
    points: [
      "Built and maintained web applications using React, Node.js, and MongoDB.",
      "Designed and implemented RESTful APIs for various client projects.",
      "Optimized application performance through code refactoring and implementing best practices.",
      "Mentored junior developers and conducted regular knowledge sharing sessions."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Creative Web Agency",
    icon: <FaCode className="text-purple-400" />,
    iconBg: "#050816",
    date: "Jun 2018 - Apr 2020",
    points: [
      "Developed responsive websites for clients across various industries.",
      "Worked with design teams to implement visual elements that adhered to brand guidelines.",
      "Maintained and updated existing client websites with new features and content.",
      "Ensured all websites were optimized for performance, security, and SEO."
    ],
  },
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="bg-tertiary p-5 rounded-2xl w-full max-w-3xl mx-auto shadow-card mb-8"
    >
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-black-200">
          {experience.icon}
        </div>
        <div>
          <h3 className="text-white text-xl font-bold">{experience.title}</h3>
          <p className="text-secondary text-lg">{experience.company_name}</p>
        </div>
      </div>

      <div className="mt-4 text-secondary flex items-center">
        <FaRegCalendarAlt className="mr-2" />
        <span>{experience.date}</span>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, pointIndex) => (
          <li
            key={`experience-point-${index}-${pointIndex}`}
            className="text-white-100 pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary text-lg uppercase tracking-wider">My journey so far</p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Work Experience.</h2>
        </motion.div>

        <div className="mt-12 flex flex-col">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 