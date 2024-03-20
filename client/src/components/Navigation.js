import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme';

function Navigation() {
  return (
    <ThemeProvider theme={theme}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/log">Log</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/edit-baby">Edit Baby</Link>
      </nav>
    </ThemeProvider>
  );
}

export default Navigation;
