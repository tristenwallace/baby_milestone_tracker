import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import { Box, Grid } from '@mui/material';
import MilestoneCard from '../components/MilestoneCard/MilestoneCard';

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 2 }}>
        <h1>Home Page</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <MilestoneCard />
          </Grid>
          {/* You can duplicate <Grid item> for multiple cards or other content */}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
