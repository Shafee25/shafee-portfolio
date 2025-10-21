import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
// --- THIS IS THE FIX: Import the images at the top ---
import oasisAmpsImage from '../assets/project-images/oasis_amps.jpg';
import lowStockAlertImage from '../assets/project-images/low_stock_alert.png';


const projects = [
    // Your projects data here...
    {
        title: 'Oasis Amps',
        description: 'A web app for users to find and book EV chargers or list their stations.',
        techStack: ['Laravel', 'Bootstrap 5', 'MySQL', 'Google Maps API', 'Stripe API'],
        imageUrl: oasisAmpsImage
    },
    {
        title: 'Low Stock Alert Cloud-Based App',
        description: 'Cloud-based app that automates inventory monitoring using a React frontend and a serverless Node.js backend on Azure.',
        techStack: ['React', 'Node.js', 'Microsoft Azure', 'Azure Functions', 'Cosmos DB'],
        imageUrl: lowStockAlertImage
    },
    // Add the rest of your projects
];

const ProjectPage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <SectionTitle title="My Projects" />
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProjectPage;