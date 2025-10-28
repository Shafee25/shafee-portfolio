import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: '1px solid grey' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          &lt;/Faris&gt;
        </Typography>
        <Box>
          {['About', 'Experience', 'Project', 'Contact'].map((item) => (
            <Button key={item} color="inherit">{item}</Button>
          ))}
        </Box>
        <Box>
          <Button variant="outlined" color="inherit">Resume</Button>
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;