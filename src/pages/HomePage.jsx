import React from 'react';
import { Container, Typography, Button, Box, Grid, IconButton } from '@mui/material';
// We NO LONGER need RouterLink, so it has been removed from this import
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/system';

import profilePhoto from '../assets/images/profile-photo.png';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const YellowBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '50%',
  height: '100%',
  backgroundColor: theme.palette.primary.main,
  clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
  zIndex: 1,
}));

const HomePage = () => {
  return (
    <HeroSection>
      <YellowBackground />
      <Container maxWidth="lg" sx={{ zIndex: 2, position: 'relative' }}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2">Hello, I'm</Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{ color: 'primary.main', fontWeight: 'bold' }}
            >
              Faris Shafee
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 2, fontWeight: 'bold' }}>
              Software Engineer
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '500px' }}>
              A passionate developer with a strong foundation in cloud architecture and full-stack development, eager to build innovative solutions.
            </Typography>
            <Box>
              <IconButton href="https://github.com/Shafee25" target="_blank" color="inherit" sx={{ mr: 1, border: '1px solid #fff', borderRadius: '50%' }}>
                <GitHubIcon />
              </IconButton>
              <IconButton href="www.linkedin.com/in/shafee-ahamed" target="_blank" color="inherit" sx={{ border: '1px solid #fff', borderRadius: '50%' }}>
                <LinkedInIcon />
              </IconButton>
            </Box>

            {/* --- THIS IS THE FIX --- */}
            {/* The button now uses a simple href to scroll to the #projects section */}
            <Button
              href="#projects" // Changed from 'to="/projects"'
              // Removed 'component={RouterLink}'
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 4, color: '#000', fontWeight: 'bold', px: 4, py: 1.5 }}
            >
              View My Projects
            </Button>
            {/* --- END OF FIX --- */}

          </Grid>
          <Grid item xs={12} md={6} sx={{
            position: 'relative',
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Box
              component="img"
              src={profilePhoto}
              alt="Faris Shafee Ahamed"
              sx={{
                width: '100%',
                maxWidth: '450px',
                height: 'auto',
                borderRadius: '16px',
                objectFit: 'cover',
                filter: 'grayscale(100%)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default HomePage;