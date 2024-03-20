import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import LogPage from './pages/LogPage';
import DashboardPage from './pages/DashboardPage';
import EditBabyPage from './pages/EditBabyPage';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log" element={<LogPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/edit-baby" element={<EditBabyPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
