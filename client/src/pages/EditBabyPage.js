import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import Typography from '@mui/material/Typography';

function EditBabyPage() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 20 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to the edit baby page
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default EditBabyPage;
