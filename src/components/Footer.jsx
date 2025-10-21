import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                    <IconButton
                        aria-label="GitHub"
                        component="a"
                        href="https://github.com/Shafee25"
                        target="_blank"
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton
                        aria-label="LinkedIn"
                        component="a"
                        href="https://www.linkedin.com/in/shafee-ahamed-b893a2235/" // <-- Replace with your actual LinkedIn URL
                        target="_blank"
                    >
                        <LinkedIn />
                    </IconButton>
                    {/* Add Fiverr or other social links here */}
                </Box>
                <Typography variant="body2" color="text.secondary" align="center">
                    {'© '}
                    {new Date().getFullYear()} Faris Shafee Ahamed. All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;