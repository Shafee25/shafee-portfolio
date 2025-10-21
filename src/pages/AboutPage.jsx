import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SectionTitle from '../components/SectionTitle.jsx';

const AboutPage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <SectionTitle title="About Me" />
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={8}>
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>

                        {/* --- THIS IS THE FIX --- */}
                        <Typography variant="h4" component="h2" gutterBottom>
                            I'm{' '}
                            <Box component="span" sx={{ color: 'primary.main' }}>
                                Faris Shafee Ahamed,
                            </Box>
                            {' '}a passionate developer on a mission.
                        </Typography>
                        {/* --- END OF FIX --- */}

                        <Typography variant="body1" color="text.secondary" paragraph>
                            As a fourth-year BICT (Hons) student specializing in Software Technologies, my passion lies in exploring emerging fields like Machine Learning and Artificial Intelligence. I aim to apply my strong foundation in cloud architecture and full-stack development to impactful, real-world projects.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            My hands-on experience as a lecturer, business growth lead, and freelancer has not only sharpened my technical depth but also strengthened my problem-solving, communication, and teamwork abilities.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutPage;