import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  // These paths now point to the section IDs we will create in App.jsx
  const navItems = [
    { text: 'Home', path: '#home' },
    { text: 'About', path: '#about' },
    { text: 'Projects', path: '#projects' },
    { text: 'Skills', path: '#skills' },
    { text: 'Resume', path: '#resume' },
    { text: 'Contact', path: '#contact' },
  ];

  return (
    // "sticky" is important - it keeps the navbar visible as you scroll
    <AppBar
      position="sticky"
      elevation={2}
      sx={{
        bgcolor: 'background.default',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(18, 18, 18, 0.8)', // Semi-transparent background
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="a" href="#home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'primary.main' }}>
          Faris Shafee Ahamed
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.text}
              href={item.path} // Use standard href for anchor links
              sx={{
                color: 'text.primary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;