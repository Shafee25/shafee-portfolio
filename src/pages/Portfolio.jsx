import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

// --- THIS IS THE FIX ---
// Added the .jsx extension to prevent any future import errors.
import Navbar from '../components/NewNavbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';

const Portfolio = ({ isDarkMode, toggleTheme }) => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'content', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPortfolioData(docSnap.data());
      } else {
        console.log("No data found. Please publish content from the /admin dashboard.");
        // Set some default data so the page doesn't stay blank
        setPortfolioData({ hero: {}, about: {} });
      }
    };
    fetchData();
  }, []);

  if (!portfolioData) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>Loading Portfolio...</Box>;
  }

  return (
    <Box>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero data={portfolioData.hero || {}} />
        <About data={portfolioData.about || {}} />
        {/* You will add your other sections here */}
      </main>
    </Box>
  );
};

export default Portfolio;