import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

// Access environment variables with fallbacks
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL;

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        scrolled ? 'bg-primary' : 'bg-transparent'
      } w-full flex items-center h-[60px] sm:h-[80px] md:h-[100px] fixed top-0 z-20 transition-all duration-300 ease-in-out`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href='#home' onClick={() => setActive('')}>
          <img
            src={require('../assets/images/userassets/logo.png')}
            alt='Logo'
            className='h-[70px] sm:h-[80px] md:h-[90px] cursor-pointer'
/>

          </a>
        </motion.div>

        <div className='hidden sm:flex flex-row gap-10'>
          <motion.ul
            className='list-none hidden sm:flex flex-row gap-10'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[20px] font-medium cursor-pointer transition-colors duration-200`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className='flex gap-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={GITHUB_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-green-500 transition-colors duration-200'
            >
              <FaGithub size={30} />
            </a>
            <a
              href={LINKEDIN_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-green-500 transition-colors duration-200'
            >
              <FaLinkedin size={30} />
            </a>
          </motion.div>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] text-white cursor-pointer flex items-center justify-center'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-black-100 absolute top-[60px] right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl bg-primary border border-gray-800 shadow-lg`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-secondary'
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <div className='flex gap-4 mt-2'>
                <a
                  href={GITHUB_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-green-500 transition-colors duration-200'
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-green-500 transition-colors duration-200'
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
