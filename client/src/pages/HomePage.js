import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SaveIcon from '@mui/icons-material/Save';

function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 20 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to the Baby Milestone Tracker
        </Typography>

        <Typography variant="body1" paragraph>
          This is a simple app to help you track the precious milestones in your
          baby&#39;s life.
        </Typography>

        <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
          Save a Milestone
        </Button>

        <Card variant="outlined" style={{ marginTop: 20 }}>
          <CardContent>
            <Typography variant="h5">Example Milestone</Typography>
            <Typography variant="body2">
              This is an example of a card that could display a milestone.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default HomePage;
