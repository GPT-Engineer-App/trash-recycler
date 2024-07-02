import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const [mode, setMode] = useState<string>('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (mode) {
      navigate(`/${mode}`);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to ML Object Detection</h1>
      <p className="mb-4">Please select a mode to get started:</p>
      <select
        className="w-64 mx-auto mb-4"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option value="" disabled>Select Mode</option>
        <option value="live-view">Live View</option>
        <option value="tallies-settings">Tallies & Settings</option>
      </select>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        disabled={!mode}
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Index;