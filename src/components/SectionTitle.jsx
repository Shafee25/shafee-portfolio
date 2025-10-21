import React from 'react';
import { Typography, Box } from '@mui/material';

const SectionTitle = ({ title }) => {
  // This code automatically splits your title ("My Projects") into two parts
  const titleParts = title.split(' ');
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(' ');

  return (
    <Box sx={{ mb: 6, mt: 4, textAlign: 'center' }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
        }}
      >
        {/* The first word is rendered in the primary (yellow) color */}
        <Box component="span" sx={{ color: 'primary.main' }}>
          {firstWord}
        </Box>
        {' '}
        {/* The rest of the title with the underline */}
        <Box component="span" sx={{ position: 'relative', display: 'inline-block', pb: 1 }}>
          {restOfTitle}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '4px',
              // The underline will be the same color as the text (white in dark mode)
              backgroundColor: 'currentColor',
              borderRadius: '2px',
            }}
          />
        </Box>
      </Typography>
    </Box>
  );
};

export default SectionTitle;