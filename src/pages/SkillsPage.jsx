import React from 'react';
import { Container, Box, Grid, Chip, Paper, Typography } from '@mui/material';
import SectionTitle from '../components/SectionTitle.jsx'; // Import the component

const skillsData = {
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Node.js', 'Laravel', 'Bootstrap', 'Tailwind CSS'],
    'Cloud & DevOps': ['Microsoft Azure', 'Azure Functions', 'Git', 'GitHub', 'Docker'],
    'Mobile Development': ['Flutter', 'Android Studio (Java)'],
    'Databases': ['MySQL', 'MongoDB', 'Firebase', 'Azure Cosmos DB', 'Cassandra DB'],
    'Programming Languages': ['Java', 'C'],
};

const SkillsPage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            {/* USE THE NEW SECTION TITLE */}
            <SectionTitle title="My Skills" />

            <Grid container spacing={4}>
                {Object.entries(skillsData).map(([category, skills]) => (
                    <Grid item xs={12} sm={6} key={category}>
                        <Paper elevation={3} sx={{ p: 3, backgroundColor: 'background.paper', height: '100%' }}>
                            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                                {category}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {skills.map((skill) => (
                                    <Chip key={skill} label={skill} variant="outlined" />
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SkillsPage;