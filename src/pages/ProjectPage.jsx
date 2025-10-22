import React from 'react';
import { Container, Grid } from '@mui/material';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import oasisAmpsImage from '../assets/project-images/oasis_amps.jpg';
import lowStockAlertImage from '../assets/project-images/low_stock_alert.png';

const projects = [
    {
        title: 'Oasis Amps',
        description: 'A web app for users to find and book EV chargers or list their stations.',
        techStack: ['Laravel', 'Bootstrap 5', 'MySQL', 'Google Maps API', 'Stripe API'],
        imageUrl: oasisAmpsImage
    },
    {
        title: 'Low Stock Alert Cloud-Based App',
        description: 'Automates inventory monitoring using a React frontend and a serverless Node.js backend on Azure.',
        techStack: ['React', 'Node.js', 'Microsoft Azure', 'Azure Functions', 'Cosmos DB'],
        imageUrl: lowStockAlertImage
    },
    // Add more projects here. For a perfect grid, add them in pairs (2, 4, 6, etc.)
];

const ProjectPage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <SectionTitle title="My Projects" />
            <Grid container spacing={5} justifyContent="center"> {/* Increased spacing */}
                {projects.map((project, index) => (
                    // --- THIS IS THE FIX ---
                    // md={6} makes each card take up half the width on medium screens and larger, creating a 2-column layout.
                    <Grid item key={index} xs={12} sm={8} md={6}>
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProjectPage;