import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Hero, About, Skills, Projects, Contact, Footer } from './components';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App; 