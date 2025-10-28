import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

// Import your new components (we will create these next)
import Navbar from '../components/NewNavbar';
import Hero from '../components/Hero';
import About from '../components/About';
// ... import other sections as you build them

const Portfolio = ({ isDarkMode, toggleTheme }) => {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // We will create a document called 'main' in a collection called 'content' in Firestore
      const docRef = doc(db, 'content', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPortfolioData(docSnap.data());
      } else {
        console.log("No such document! You need to set data in the admin dashboard.");
      }
    };
    fetchData();
  }, []);

  if (!portfolioData) {
    return <Box>Loading...</Box>; // Or a fancy loading spinner
  }

  return (
    <Box>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        {/* Render other sections here, passing the data */}
      </main>
    </Box>
  );
};

export default Portfolio;