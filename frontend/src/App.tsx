import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import LiveView from './pages/LiveView';
import TalliesAndSettings from './pages/TalliesAndSettings';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/live-view" element={<LiveView />} />
        <Route path="/tallies-settings" element={<TalliesAndSettings />} />
      </Routes>
    </Router>
  );
};

export default App;