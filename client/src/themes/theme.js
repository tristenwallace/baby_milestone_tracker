import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e9c46a', // A warm sand color, reminiscent of desert dunes
      contrastText: '#fff', // White text on primary color for better readability
    },
    secondary: {
      main: '#f4a261', // A soft, luxurious orange shade
    },
    background: {
      default: '#fdf6e3', // A very light, warm background color like soft sand
      paper: '#faf3e0', // Slightly darker than the default background for elevation
    },
    text: {
      primary: '#2a2a2a', // A deep, strong color for primary text to contrast with the soft background
      secondary: '#564d4a', // A softer, brownish-grey for secondary text
    },
  },
  typography: {
    fontFamily: "'Playfair Display', serif", // A font that evokes a sense of luxury and elegance
    h1: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
      fontWeight: 700,
    },
    // Add other variants as needed
  },
  transitions: {
    // Customize transitions for a smoother feel, reflecting the softness of the theme
    easing: {
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Define other easing functions as needed
    },
    duration: {
      standard: 300, // Standard duration for transitions
      // Define other durations as needed
    },
  },
  components: {
    // Customize specific components to fit the theme
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // More rounded buttons for a softer feel
          textTransform: 'none', // Avoid uppercase text to maintain elegance
          padding: '8px 24px', // Slightly larger padding for a luxurious feel
        },
      },
    },
    // Customize other components as needed
  },
});

export default theme;
