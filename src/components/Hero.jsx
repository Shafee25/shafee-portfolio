import React from 'react';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// This component receives the 'data' from Firebase via the Portfolio page
const Hero = ({ data }) => {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative', // For positioning the arrow
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: '300', fontSize: { xs: '3rem', md: '5rem' } }}>
        {data.title || "Hi, I'm Faris Shafee"} {/* Fallback text */}
      </Typography>
      <Typography variant="h5" sx={{ mt: 1, color: 'text.secondary' }}>
        {data.subtitle || "A software developer"} {/* Fallback text */}
      </Typography>

      <KeyboardArrowDownIcon sx={{ position: 'absolute', bottom: 30, fontSize: '2rem' }} />
    </Box>
  );
};

export default Hero;