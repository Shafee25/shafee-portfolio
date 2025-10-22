import React from 'react';
import { Container, Box, Grid, Chip, Paper, Typography } from '@mui/material';
import SectionTitle from '../components/SectionTitle.jsx';

const skillsData = {
    'Web Development': ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Node.js', 'Laravel', 'Bootstrap', 'Tailwind CSS'],
    'Cloud & DevOps': ['Microsoft Azure', 'Azure Functions', 'Git', 'GitHub', 'Docker'],
    'Databases': ['MySQL', 'MongoDB', 'Firebase', 'Azure Cosmos DB', 'Cassandra DB'],
    'Mobile Development': ['Flutter', 'Android Studio (Java)'],
    'Programming Languages': ['Java', 'C'],
};

const SkillCategory = ({ category, skills }) => (
    <Paper elevation={3} sx={{ p: 3, backgroundColor: 'background.paper', height: '100%' }}>
        <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
            {category}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {skills.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" />
            ))}
        </Box>
    </Paper>
);

const SkillsPage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <SectionTitle title="My Skills" />
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <SkillCategory category="Web Development" skills={skillsData['Web Development']} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <SkillCategory category="Cloud & DevOps" skills={skillsData['Cloud & DevOps']} />
                        </Grid>
                        <Grid item xs={12}>
                           <SkillCategory category="Databases" skills={skillsData['Databases']} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                     <Grid container spacing={4}>
                        <Grid item xs={12}>
                             <SkillCategory category="Mobile Development" skills={skillsData['Mobile Development']} />
                        </Grid>
                        <Grid item xs={12}>
                            <SkillCategory category="Programming Languages" skills={skillsData['Programming Languages']} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SkillsPage;