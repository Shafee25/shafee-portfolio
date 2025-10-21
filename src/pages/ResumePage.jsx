import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import SectionTitle from '../components/SectionTitle.jsx'; // Import the component

const ResumePage = () => {
    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            {/* USE THE NEW SECTION TITLE */}
            <SectionTitle title="My Resume" />

            <Box sx={{ textAlign: 'center', p: 4, backgroundColor: 'background.paper', borderRadius: '8px' }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Download a copy of my CV
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                    You can download the latest version of my resume for your records. It contains a detailed overview of my skills, experience, and projects.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<DownloadIcon />}
                    href="/Faris_Shafee_Ahamed_CV.pdf" // Path to your CV in the public folder
                    download
                    sx={{ color: '#000', fontWeight: 'bold' }}
                >
                    Download CV
                </Button>
            </Box>
        </Container>
    );
};

export default ResumePage;