import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

// --- IMPORTANT ---
// For this to work, you MUST have a professional, square photo of yourself
// inside the public folder, named profile-photo.jpg
// Example Path: public/profile-photo.jpg

// This component receives the 'data' from Firebase
const About = ({ data }) => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        About Me
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item md={7}>
          <Typography variant="h6" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            {data.text || "I'm a passionate Software Engineer... (Please update this in your admin dashboard)"} {/* Fallback text */}
          </Typography>
        </Grid>
        <Grid item md={5} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={data.imageUrl || "/profile-photo.jpg"} // Uses image from Firebase or fallback from public folder
            alt="Faris Shafee Ahamed"
            sx={{
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              objectFit: 'cover',
              filter: 'grayscale(100%)',
              border: '2px solid grey',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;