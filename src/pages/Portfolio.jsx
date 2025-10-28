import React, { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { db } from '../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import Navbar from '../components/NewNavbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
// Import new section components we'll create
// import Experience from '../components/Experience.jsx';
// import Projects from '../components/Projects.jsx';
// ... etc

const Portfolio = ({ isDarkMode, toggleTheme }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const profileSnap = await getDoc(doc(db, 'profile', 'main'));
            const projectsSnap = await getDocs(collection(db, 'projects'));
            const experiencesSnap = await getDocs(collection(db, 'experiences'));
            // Fetch other collections here...

            setData({
                profile: profileSnap.exists() ? profileSnap.data() : {},
                projects: projectsSnap.docs.map(d => d.data()),
                experiences: experiencesSnap.docs.map(d => d.data()),
            });
        };
        fetchData();
    }, []);

    if (!data) {
        return <CircularProgress />;
    }

    return (
        <Box>
            <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} resumeUrl={data.profile.cvUrl} />
            <main>
                <Hero data={{ name: 'Faris Shafee Ahamed', title: 'Software Engineer' }} />
                <About data={data.profile} />
                {/* <Experience data={data.experiences} /> */}
                {/* <Projects data={data.projects} /> */}
                {/* ... other sections */}
            </main>
        </Box>
    );
};

export default Portfolio;