import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Import all the sections
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx'; // Make sure this is the correct filename
import SkillsPage from './pages/SkillsPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Navbar />
      <main>
        {/* Each component is now a section with an ID */}
        <section id="home">
          <HomePage />
        </section>

        <section id="about">
          <AboutPage />
        </section>

        <section id="projects">
          <ProjectPage />
        </section>

        <section id="skills">
          <SkillsPage />
        </section>

        <section id="resume">
          <ResumePage />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer />
    </Box>
  );
}

export default App;