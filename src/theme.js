import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // This enables the dark theme
    primary: {
      main: '#FFD700', // A vibrant gold/yellow accent
    },
    background: {
      default: '#121212', // A deep, dark background
      paper: '#1E1E1E',   // Slightly lighter background for cards and surfaces
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h3: {
        fontSize: '2.2rem',
        fontWeight: 600,
    },
    h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;