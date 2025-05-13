import React from 'react';
import { FaLinkedin, FaInstagram, FaDownload, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Mail_ID = process.env.REACT_APP_EMAIL;
const LINKEDIN_URL = process.env.REACT_APP_LINKEDIN_URL;
const INSTAGRAM_URL = process.env.REACT_APP_INSTAGRAM_URL;
const X_URL = process.env.REACT_APP_X_URL;
console.log("INSTAGRAM:", INSTAGRAM_URL);
console.log("X:", X_URL);

const Footer = () => {
  return (
    <footer className="bg-black-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h1 className="text-white text-[24px] font-bold cursor-pointer">
              <span className="gradient-text">V. Dedeep Nagendra Varma</span>
            </h1>
            <p className="text-secondary mt-2">
              Full Stack Developer
            </p>
            
            <a
              href="/resume/Resume_ATS.pdf"  // Direct link to file in the public folder
              download
              onClick={() => window.open("/resume/Resume_ATS.pdf", "_blank")}
              className="flex items-center gap-2 mt-4 bg-tertiary py-2 px-6 rounded-xl text-white font-medium transition-colors duration-300 hover:bg-[#1d1855] w-fit"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-white text-2xl font-semibold mb-6 gradient-text">Connect With Me</h3>
            <div className="flex gap-6">
              <a href={`mailto:${Mail_ID}`} className="text-secondary hover:text-green-500 transition-colors duration-200">
                <FaEnvelope size={30} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-green-500 transition-colors duration-200">
                <FaLinkedin size={30} />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-green-500 transition-colors duration-200">
                <FaInstagram size={30} />
              </a>
              <a href={X_URL} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-green-500 transition-colors duration-200">
                <FaXTwitter size={30} />
              </a>
            </div>
          </div>
        </div>
        

        <div className="border-t border-gray-600 mt-8 pt-6">
          <p className="text-secondary text-center text-sm">
            © {new Date().getFullYear()} V. Dedeep Nagendra Varma. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 